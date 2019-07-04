class Api::NotebooksController < ApplicationController
    # before_action :require_logged_in

    def index
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = current_user.notebooks.find(params[:id])
        render :show
    end

    def create
        @notebook = Notebook.new(notebook_params)
        if @notebook.save
            render :index
        else
            render json: ["Notebook name already in use."], status: 409
        end
    end

    def update
        @notebook = current_user.notebooks.find(params[:id])
        if @notebook.update_attributes(notebook_params)
            render :index
        else
            render json: ["Notebook name already in use."], status: 409
        end
    end

    def destroy 
        @notebook = Notebook.find(params[:id])
        @notebook.destroy
        render :index
    end

    private
    def notebook_params
        params.require(:notebook).permit(:title, :author_id)
    end
end
