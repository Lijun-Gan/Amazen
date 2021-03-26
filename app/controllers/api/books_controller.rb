class Api::BooksController < ApplicationController
    def index 
        @books = Book.includes(:prices,:reviews).all 
        #  
        render :index
    end

    def show
        @book = Book.includes(:book_author, :reviews, :prices).find_by(id: params[:id])
        #  
        if @book
            render :show
        else 
            render json:  @book.errors.full_messages, status: 404 
        end 
    end

end


