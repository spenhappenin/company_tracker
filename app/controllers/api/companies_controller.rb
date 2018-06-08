class Api::CompaniesController < ApplicationController
  
  def my_companies
    render json: current_user.companies.all.order("title ASC")
  end

  def create
    company = current_user.companies.create(company_params)
    render json: company
  end

  def update
    company = Company.find(params[:id])
    company.update(company_params)
    render json: company
  end

  def destroy
    company = Company.find(params[:id])
    company.destroy
  end

  private
    def company_params
      params.require(:company).permit(:title, :description, :location, :applied, :position, :position_details)
    end
end
