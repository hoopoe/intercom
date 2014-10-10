class AddPositions < ActiveRecord::Migration
  def up
  	add_column :user_profile_t, :positions, :text
  end

  def down
  	remove_column :user_profile_t, :positions
  end
end
