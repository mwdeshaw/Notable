@notebooks.each do |notebook|
    json.set! notebook.id do
        json.partial! 'api/notebooks/notebook', notebook: notebook
        json.noteIds []
    end
end