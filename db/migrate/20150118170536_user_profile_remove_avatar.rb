class UserProfileRemoveAvatar < ActiveRecord::Migration
  def up
  	remove_column :user_profile_t, :avatar_file_name
  	remove_column :user_profile_t, :avatar_content_type
  	remove_column :user_profile_t, :avatar_file_size
  	remove_column :user_profile_t, :avatar_updated_at
  end

  def down
  	add_column :user_profile_t, :avatar_file_name, :string
  	add_column :user_profile_t, :avatar_content_type, :string
  	add_column :user_profile_t, :avatar_file_size, :integer
  	add_column :user_profile_t, :avatar_updated_at, :datetime
  end
end
