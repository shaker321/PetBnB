# == Schema Information
#
# Table name: pets
#
#  id                 :integer          not null, primary key
#  species            :string           not null
#  age                :integer          not null
#  breed              :string           not null
#  temperament        :text             not null
#  price              :integer          not null
#  lat                :float            not null
#  lng                :float            not null
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  name               :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Pet < ActiveRecord::Base
  validates :name, :species, :age, :breed, :temperament, :price, :lat, :lng, :user_id, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_many :reviews, -> {order(created_at: :desc)}
  has_many :bookings

  def self.in_bounds(bounds)
    lat_upper = (bounds["northEast"]["lat"]).to_f
    lat_lower = (bounds["southWest"]["lat"]).to_f
    lng_upper = (bounds["northEast"]["lng"]).to_f
    lng_lower = (bounds["southWest"]["lng"]).to_f

    pets_in_bounds = Pet.where(
      lat: (lat_lower..lat_upper),
      lng: (lng_lower..lng_upper)
    )
  end
end
