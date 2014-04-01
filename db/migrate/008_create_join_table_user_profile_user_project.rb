class CreateJoinTableUserProfileUserProject < ActiveRecord::Migration
  def change
	create_table :user_profiles_user_projects, id: false do |t|
      t.belongs_to :user_profile
      t.belongs_to :user_project
  		end
	end
end
