class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :type, null: false
      t.integer :age, null: false
      t.string :breed, null: false
      t.text :temperament, null: false
      t.integer :price, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :pets, :user_id
  end
end
