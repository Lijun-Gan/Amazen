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
        @user = User.include(:carts, :wishlists).find_by(id: params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def update
        @user = User.find_by(id: params[:id])
 


        if @user.update(user_params)
        
            @user = User.includes(authorized_reviews: :book).find_by(id: params[:id])

            render :profile
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

    def reviews
        @user = User.includes(authorized_reviews: :book).find_by(id: params[:userId])
        render :profile
    end


    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :phone_number)
    end

end
