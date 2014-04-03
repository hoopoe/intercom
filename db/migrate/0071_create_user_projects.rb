class CreateUserProjects < ActiveRecord::Migration
  def change
    create_table :user_projects do |t|
      t.string :name
    end
  end
end
