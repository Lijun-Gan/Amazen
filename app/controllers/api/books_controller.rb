class Api::BooksController < ApplicationController
    def index 
        @books = Book.includes(:prices,:reviews).all 
        render :index
    end

    def show
        @book = Book.includes(:book_author, :reviews, :prices).find_by(id: params[:id])
        if @book
            render :show
        else 
            render json:  @book.errors.full_messages, status: 404 
        end 
    end

    def title

        @books = Book.where(title: params[:title])
        render :index
    end

    def category

        @books =  Book.where(category: params[:category])
        render :index
    end

    def recommendation

        @books =  Book.order("RANDOM()").limit(5)
        render :index
    end

    def format

        @books = Book.includes(:prices).where(prices: { book_format: params[:format] })
        # @books = Book.joins(:prices).where(prices: { book_format: params[:format] })

        render :index
    end

end


