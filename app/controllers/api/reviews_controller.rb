class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            @book = Book.find_by(id: params[:review][:book_id])
            # debugger
            render "api/books/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
  
        if @review.update(review_params)
            @book = Book.find_by(id: params[:review][:book_id])
            render "api/books/show"
        else
            render @review.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @review = Review.find_by(id: params[:id]).destroy
        @book = Book.find_by(id: params[:review][:book_id])
        render "api/books/show"
    end

    def show
        @review = Review.includes(:book).find_by(id: params[:id])
        render :show
    end

    private
    def review_params
        params.require(:review).permit(:title, :body, :rating, :book_id)
    end
end