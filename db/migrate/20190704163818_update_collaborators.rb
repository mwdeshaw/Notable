class UpdateCollaborators < ActiveRecord::Migration[5.2]
  def change
    add_index :collaborators, :user_id
    add_index :collaborators, :notebook_id
    add_index :collaborators, [:user_id, :notebook_id], unique: true
  end
end
