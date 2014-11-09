class ChangeUeCardinality < ActiveRecord::Migration
  def up
  	drop_table:user_events_t
  	create_table :user_events_t do |t|
      t.integer :user_id
      t.integer :event_id
      t.text :body
    end
  end

  def down
  	drop_table:user_events_t
  	 create_table :user_events_t do |t|
      t.integer :user_id
      t.integer :event_id
      t.text :body
    end
  end
end
