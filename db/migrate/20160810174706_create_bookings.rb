class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :pet_id, null: false
      t.integer :user_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, null: false

      t.timestamps null: false
    end

    add_index :bookings, :pet_id
    add_index :bookings, :user_id
  end
end
