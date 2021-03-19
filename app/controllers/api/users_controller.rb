class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            log_in!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status:422
        end 
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def exists

        user = User.account_exist(params[:email_or_phone])
        if user
            render json: {exist: 1, email: user.email }

        else
            render json: {exist: 0, email: ""}
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
