class Api::TopicsController < ApplicationController

  def my_topics 
    render json: current_user.topics.all.order("title ASC")
  end

  def create
    render json: current_user.topics.create(topics_params)
  end

  def update
    render json: Topic.find(params[:id]).update(topics_params)
  end

  def destroy
    Topic.find(params[:id]).destroy
  end

  private
    def topics_params
      params.require(:topic).permit(:body, :category, :title)
    end

end
