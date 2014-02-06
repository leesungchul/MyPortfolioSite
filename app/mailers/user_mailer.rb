class UserMailer < ActionMailer::Base
  default to: 'leesungchul@gmail.com'

  def contact_email(name, email, phone, msg)
    @name = name
    @email = email
    @phone = phone
    @msg = msg
    mail(
      from: @name + " <" + @email + ">",
      phone: @phone ||= '',
      body: @msg
    )
  end
end
