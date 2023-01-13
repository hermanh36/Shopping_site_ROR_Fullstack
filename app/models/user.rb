class User < ApplicationRecord

  validates :username, uniqueness: true, length: { in: 6..30 }, format: {without: URI::MailTo::EMAIL_REGEXP, message: "can't be an email"}
  validates :email, uniqueness: true, length: { in:3..255 }, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in:6..255 }, allow_nil: true

  before_validation :ensure_session_token
  
  attr_reader :password


  def is_password?(password)
    password_obj = BCrypt::Password.new(self.password_digest)
    return password_obj.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    self.save
  end

  def self.find_by_credentials(credential, password)
    isEmail = URI::MailTo::EMAIL_REGEXP.match?(credential)
    if isEmail 
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end
    if user && user.is_password?(password)
      return user
    end
    return nil
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    return self.session_token
  end
  

  private
  def generate_unique_session_token
    token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64
    end
    return token
  end

  def ensure_session_token
    if !self.session_token
      self.session_token = generate_unique_session_token
    end
  end
  






 end
