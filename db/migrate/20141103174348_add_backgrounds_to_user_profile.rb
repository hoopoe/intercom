class AddBackgroundsToUserProfile < ActiveRecord::Migration
  def up
  	add_column :user_profile_t, :backgrounds, :text
  end

  def down
  	remove_column :user_profile_t, :backgrounds
  end
end
