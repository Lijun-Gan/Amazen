class Api::BooksController < ApplicationController
    def index 
        @books = Book.includes(:prices,:reviews).all 
        # debugger
        render :index
    end

    def show
        @book = Book.includes(:book_author, :reviews, :prices).find_by(id: params[:id])
        # debugger
        if @book
            render :show
        else 
            render json:  @book.errors.full_messages, status: 404 
        end 
    end

end


