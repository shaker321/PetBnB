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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
