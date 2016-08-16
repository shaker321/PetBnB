class UpdateReviews2 < ActiveRecord::Migration
  def change
    add_column :reviews, :pet_id, :integer, null: false
    add_index :reviews, :pet_id
  end
end
