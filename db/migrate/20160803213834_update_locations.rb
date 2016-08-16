class UpdateLocations < ActiveRecord::Migration
  def change
    change_column :locations, :name, :string, null: false
    change_column :locations, :center_lat, :float, null: false
    change_column :locations, :center_lng, :float, null: false
  end
end
