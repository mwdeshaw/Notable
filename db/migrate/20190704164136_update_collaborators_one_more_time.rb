class UpdateCollaboratorsOneMoreTime < ActiveRecord::Migration[5.2]
  def change
      add_column :collaborators, :user_id, :integer, null: false
      add_column :collaborators, :notebook_id, :integer, null: false
  end
end
