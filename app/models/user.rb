require 'bcrypt'

class User < ApplicationRecord
    validates :username, presence: true
    validates :phone_number, uniqueness: true, length: {minimum: 10}, allow_nil: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :password_digest, presence: true

    before_validation :ensure_session_token
    attr_reader :password

    def phone_number=(phone_number)
        super(phone_number == "" ? nil : phone_number)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end


    def generate_unique_session_token
        self.session_token = generate_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = generate_session_token
        end
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.account_exist(email_or_phone)
        maybe_phone =  User.find_by(phone_number: email_or_phone)
        maybe_email =  User.find_by(email: email_or_phone)
        
        return nil if !(maybe_phone || maybe_email)
        user = maybe_phone ? maybe_phone : maybe_email
        return user

    end

    def self.find_by_credentials(email_or_phone, password)
   
        return nil unless User.account_exist(email_or_phone)
        user = User.account_exist(email_or_phone)
        user.is_password?(password)? user : nil
    end


    has_many :authorized_reviews,
        class_name: :Review,
        primary_key: :id,
        foreign_key: :user_id

    has_many :carts,
        foreign_key: :user_id,
        class_name: :Cart

    has_many :wishlists,
        foreign_key: :user_id,
        class_name: :Wishlist
    

end
