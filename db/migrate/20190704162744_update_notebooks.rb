class UpdateNotebooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :notebooks, :collaborator_ids
  end
end
