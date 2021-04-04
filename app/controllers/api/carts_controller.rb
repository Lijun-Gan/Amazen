class Api::CartsController < ApplicationController 
    def create
        @cart = Cart.new(cart_params)
        @cart.user_id = current_user.id
       
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 404
        end
    end

    def index
        @carts = Cart.find_by(user_id: current_user.id)
        render :index
    end

    # def show
    #     @cart = Cart.find_by(user_id: current_user.id)
    #     render :show
    # end

    def destroy
        @cart = Cart.find_by(id: params[:id]).destroy
        render :show
    end

    private

    def cart_params
        params.require(:cart).permit(:book_id, :quantity, :price_id)
    end
end