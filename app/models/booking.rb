# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  pet_id     :integer          not null
#  user_id    :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ActiveRecord::Base
  STATUS_STATES = %w(APPROVED DENIED PENDING)

  belongs_to :user
  belongs_to :pet

  after_initialize :assign_pending_status

  validates :pet_id, :user_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: STATUS_STATES
  validate :start_must_come_before_end
  validate :does_not_overlap_approved_request

  def approve!
    transaction do
      self.status = "APPROVED"
      self.save!

      overlapping_pending_requests.update_all(status: "DENIED")
    end
  end

  def approved?
    self.status == "APPROVED"
  end

  def denied?
    self.status == "DENIED"
  end

  def pending?
    self.status == "PENDING"
  end

  private
  def assign_pending_status
    self.status ||= "PENDING"
  end

  def overlapping_requests
    Booking
      .where.not(id: self.id)
      .where(pet_id: pet_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
        NOT ((start_date > :end_date) OR (end_date < :start_date))
      SQL
  end

  def overlapping_approved_requests
    overlapping_requests.where("status = 'APPROVED'")
  end

  def overlapping_pending_requests
    overlapping_requests.where("status = 'PENDING'")
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] << "Sorry! Your request conflicts with a previously approved request."
    end
  end

  def start_must_come_before_end
    return if start_date < end_date
    errors[:start_date] << "must come before end date"
  end
end
