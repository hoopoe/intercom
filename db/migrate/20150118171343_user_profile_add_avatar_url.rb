class UserProfileAddAvatarUrl < ActiveRecord::Migration
  def up
  	add_column :user_profile_t, :avatar_url, :string
  end

  def down
  	remove_column :user_profile_t, :avatar_url
  end
end
