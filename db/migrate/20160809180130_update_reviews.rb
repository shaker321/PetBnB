class UpdateReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :user_id, :integer, null: false
    add_index :reviews, :user_id
  end
end
