class AddAttachmentImageToPets < ActiveRecord::Migration
  def self.up
    change_table :pets do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :pets, :image
  end
end
