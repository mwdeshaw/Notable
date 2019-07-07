class UpdateCollaboratorsAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :collaborators, :user_id
    remove_column :collaborators, :notebook_id
  end
end
