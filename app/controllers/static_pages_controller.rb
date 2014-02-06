class StaticPagesController < ApplicationController
  def root
  end

  def snake
    @snake = true
  end

  def asteroids
    @asteroids = true
  end

  def contact_email
    @contactform = ContactForm.new(params)
    @contactform.deliver
    head :ok
  end
end