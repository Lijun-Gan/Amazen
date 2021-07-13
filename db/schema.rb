# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_07_183221) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name", null: false
    t.string "biography"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.string "category"
    t.date "publication_date"
    t.string "image_url"
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_books_on_author_id"
    t.index ["category"], name: "index_books_on_category"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "book_id", null: false
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price_id", null: false
    t.index ["book_id"], name: "index_carts_on_book_id"
    t.index ["price_id"], name: "index_carts_on_price_id"
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "prices", force: :cascade do |t|
    t.integer "book_id", null: false
    t.string "book_format", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "discount", default: false
    t.index ["book_format"], name: "index_prices_on_book_format"
    t.index ["book_id", "book_format"], name: "index_prices_on_book_id_and_book_format", unique: true
    t.index ["book_id"], name: "index_prices_on_book_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.integer "user_id", null: false
    t.integer "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_reviews_on_book_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone_number"
    t.string "full_name"
    t.string "image_url"
    t.string "city"
    t.string "zip_code"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username"
  end

  create_table "wishlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price_id", null: false
    t.index ["book_id"], name: "index_wishlists_on_book_id"
    t.index ["price_id"], name: "index_wishlists_on_price_id"
    t.index ["user_id"], name: "index_wishlists_on_user_id"
  end

end
