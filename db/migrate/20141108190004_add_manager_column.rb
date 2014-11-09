class AddManagerColumn < ActiveRecord::Migration
  def up
  	add_column :user_events_t, :mgr_id, :integer
  end

  def down
  	remove_column :user_events_t, :mgr_id
  end
end
