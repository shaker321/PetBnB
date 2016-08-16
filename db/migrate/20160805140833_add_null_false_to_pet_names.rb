class AddNullFalseToPetNames < ActiveRecord::Migration
  def change
    change_column :pets, :name, :string, null: false
  end
end
