class CreateEvents < ActiveRecord::Migration
  def up
    create_table :events_t do |t|
      t.integer :id
      t.string :name
    end
  end

  def down
    drop_table:events_t
  end
end
