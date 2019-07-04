class Collaborator < ApplicationRecord
    validates :user_id, uniqueness: { scope: :bench_id}

    belongs_to :user
    belongs_to :notebook
end
