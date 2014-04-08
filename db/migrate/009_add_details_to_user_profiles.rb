class AddDetailsToUserProfiles < ActiveRecord::Migration
  def change
    add_column :user_profile_t, :name, :string
    add_column :user_profile_t, :first_name, :string
    add_column :user_profile_t, :position, :string
    add_column :user_profile_t, :summary, :string
    add_column :user_profile_t, :birthday, :string
    add_column :user_profile_t, :project, :string
  end
end
