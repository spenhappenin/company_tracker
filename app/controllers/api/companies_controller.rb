class Api::CompaniesController < ApplicationController
  
  def my_companies
    render json: current_user.companies.all.order("title DESC")
  end

end
