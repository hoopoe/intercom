class CreateUserProfiles < ActiveRecord::Migration
  def up
    create_table :user_profile_t do |t|
      t.text :skills
      t.integer :user_id,          :default => 0,     :null => false
      # t.string :name
      # t.string :first_name
      t.text :position
      t.text :summary
      t.string :birthday
      t.text :project
    end
  end

  def down
    drop_table:user_profile_t
  end
end
