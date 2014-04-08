class Defaultskills < ActiveRecord::Migration
  def up
  	Skills.create(:skills => "Ruby, C++, C#")
  end

  def down
  end
end
