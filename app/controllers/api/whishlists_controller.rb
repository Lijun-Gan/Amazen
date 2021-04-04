class Api::WishlistsController < ApplicationController 
    def create
         
        @wishlist = Wishlist.new(wishlist_params)
       
        if @wishlist.save
            @book = Book.find_by(id: params[:wishlist][:book_id])
            render "api/users/show"
        else
             
            render json: @wishlist.errors.full_messages, status: 404
        end
    end

    def index
        @wishlists = Wishlist.find_by(user_id: current_user.id)
        render :index
    end

    def destroy
        @wishlist = Wishlist.find_by(id: params[:id]).destroy
        render "api/users/show"
    end

    private

    def wishlist_params
        params.require(:wishlist).permit(:book_id, :user_id)
    end
end