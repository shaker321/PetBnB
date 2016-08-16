class AddNameToPets < ActiveRecord::Migration
  def change
    add_column :pets, :name, :string
  end
end
