json.extract! @notebook, :id, :title, :author_id, :updated_at
json.noteIds @notebook.notes.pluck(:id)


@notebook.notes.each do |note|
  json.notes do
    json.set! note.id do
      json.partial! 'api/notes/note', note: note
    end
  end
end