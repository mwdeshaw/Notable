class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            Notebook.create(title: "My First Notebook", author_id: @user.id)
            login!(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.nil?
            render json: ["There is no account for the username or email you entered."], status: 400
        elsif @user.update_attributes(user_params)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        render "/api/users/show"
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end
