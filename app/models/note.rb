class Note < ApplicationRecord
    before_validation :ensure_title, on: [:create, :update]
    validates :notebook_id, :author_id, presence: true
    validates :body, presence: true, allow_blank: true

    before_save :ensure_title

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :notebook,
        primary_key: :id,
        foreign_key: :notebook_id,
        class_name: :Notebook

    private
    def ensure_title
        self.title = "Untitled" if self.title == ""
    end
end
