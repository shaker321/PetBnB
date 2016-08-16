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

require 'test_helper'

class PetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
