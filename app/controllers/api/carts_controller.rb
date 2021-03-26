class Api::CartsController < ApplicationController 
    def create
         
        @cart = Cart.new(cart_params)
       
        if @cart.save
            render :show
        else
             
            render json: @cart.errors.full_messages, status: 404
        end

    end



    private

    def cart_params
        params.require(:cart).permit(:book_id, :user_id,:quantity)
    end
end