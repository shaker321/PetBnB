# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  body       :string           default(""), not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  pet_id     :integer          not null
#  username   :string
#

class Review < ActiveRecord::Base
  validates :rating, inclusion: {in: (1..5)}
  validates :user_id, :pet_id, :body, :rating, presence: true

  belongs_to :pet
  belongs_to :user
end
