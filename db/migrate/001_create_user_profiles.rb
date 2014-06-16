class CreateUserProfiles < ActiveRecord::Migration
  def up
    create_table :user_profile_t do |t|
      t.text :data
      #t.text :skills
      t.integer :user_id,          :default => 0,     :null => false      
      #t.text :position
      #t.text :summary
      #t.string :birthday
      #t.text :project
    end
  end

  def down
    drop_table:user_profile_t
  end
end
