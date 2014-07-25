class AddSettingsToUserProfile < ActiveRecord::Migration
  def up
    add_column :user_profile_t, :settings, :text
  end
  
  def down
    remove_column :user_profile_t, :settings
  end
end
