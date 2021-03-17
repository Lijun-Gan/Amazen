class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email_or_username],
            params[:user][:password]
        )
        # debugger
        if @user
            log_in!(@user)
            render 'api/users/show'
        else 
            render json: ["Invalid Creadentials!"], status: 401
        end
    end

    def destroy
        # debugger
        @user = current_user
        if @user
            log_out!
            render json: {message: "Sign Out Successful!"}
        else 
            render json: ["No Signed In User"], status: 404
        end 
    end

end