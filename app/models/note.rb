class Note < ApplicationRecord
    validates :notebook_id, :author_id, :title, presence: true
    validates :body, presence: true, allow_blank: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :notebook,
        primary_key: :id,
        foreign_key: :notebook_id,
        class_name: :Notebook

end
