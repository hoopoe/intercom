class CreateUserProfiles < ActiveRecord::Migration
  def up
    create_table :user_profile_t do |t|
      t.string :skills
      t.integer :user_id,          :default => 0,     :null => false
    end

    UserProfile.create(:user_id => 1, :skills => 'c++, java, ruby')
  end

   def down
   	drop_table:user_profile_t
   end
end
