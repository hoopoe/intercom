class AddAttachmentAvatarToUserprofiles < ActiveRecord::Migration
  def self.up
    change_table :user_profile_t do |t|
      t.attachment :avatar
    end
  end

  def self.down
    drop_attached_file :user_profile_t, :avatar
  end
end
