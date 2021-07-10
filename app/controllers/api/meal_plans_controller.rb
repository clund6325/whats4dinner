class Api::MealPlansController < ApplicationController
  before_action :set_meal_plan, only: [:show, :update, :destroy]

  def index
    render json: current_user.meal_plans
  end

  def show
    render json: @meal_plan
  end

  def create
    @meal_plan = current_user.meal_plans.new(meal_plan_params)
    if @meal_plan.save
      render json: @meal_plan
    else
      render json: { errors: @meal_plan.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @meal_plan.update(meal_plan_params)
      render json: @meal_plan
    else
      render json: { errors: @meal_plan.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @meal_plan.destroy
    render json: { message: "Meal Plan Deleted"}
  end

  private
    def set_meal_plan
      @meal_plan = current_user.meal_plans.find(params[:id])
    end

    def meal_plan_params
      params.require(:meal_plan).permit(:week_day, :meal, :theme)
    end
    
end
