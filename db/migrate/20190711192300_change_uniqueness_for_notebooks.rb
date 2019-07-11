class ChangeUniquenessForNotebooks < ActiveRecord::Migration[5.2]
  def change
    remove_index :notebooks, :title
    remove_index :notebooks, :author_id
    add_index :notebooks, [:author_id, :title], unique: true
    add_index :notebooks, :title
  end
end
