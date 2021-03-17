class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    before_validation :ensure_session_token
    attr_reader :password

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

    def self.find_by_credentials(username_or_email, password)
        maybe_username =  User.find_by(username: username_or_email)
        maybe_email =  User.find_by(email: username_or_email)
        
        return nil if !(maybe_username || maybe_email)
        
        user = maybe_username ? maybe_username : maybe_email
       
        user.is_password?(password)? user : nil
    end

end
