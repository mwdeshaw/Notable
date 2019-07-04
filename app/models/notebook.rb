class Notebook < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :author_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    has_many :collaborators,
        through: :collaborators,
        source: :user
end
