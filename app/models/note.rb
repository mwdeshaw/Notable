class Note < ApplicationRecord
    validates :title, :notebook_id, :author_id, presence: true
    validates :body, allow_blank: true

    after_initialize :default_title

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :notebook,
        primary_key: :id,
        foreign_key: :notebook_id,
        class_name: :Notebook


    private
    def default_title
        self.title ||= "Untitled"
    end
end
