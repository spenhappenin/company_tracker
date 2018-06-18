class Api::CompaniesController < ApplicationController
  
  def my_companies
    render json: current_user.companies.all.order("title ASC")
  end

  def create
    render json: current_user.companies.create(company_params)
  end

  def update
    render json: Company.find(params[:id]).update(company_params)
  end

  def destroy
    Company.find(params[:id]).destroy
  end

  private
    def company_params
      params.require(:company).permit(:applied, :contacts, :description, :location, :position, :position_details, :title)
    end
    
end
