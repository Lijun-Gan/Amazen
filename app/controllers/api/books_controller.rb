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

    def booksTitles
        @books = Book.all 
        render :booksTitles
    end

    def title

        @books = Book.where(title: params[:title])
        render :index
    end

    def category

        @books =  Book.where(category: params[:category])
        render :index
    end

    def discount

        @books =  Book.includes(:prices).where(:prices => {discount: true})
        render :index
    end

    def recommendation

        @books =  Book.order("RANDOM()").limit(5)
        render :index
    end

    def prime
        @books =  Book.find([2,3,5,7,10,12,15,17,18])
        render :index
    end

    def bestBooks
        @books =  Book.find([14,15,16,17,18,19,20])
        render :index
    end
    
    def celebrityPicks
        @books =  Book.find([8,9,10,11,12,13])
        render :index
    end
 
    def bookBox
        @books =  Book.find([1,2,3,4,5,6,7])
        render :index
    end

    def format

        @books = Book.includes(:prices).where(prices: { book_format: params[:format] })
        # @books = Book.joins(:prices).where(prices: { book_format: params[:format] })

        render :index
    end

end


