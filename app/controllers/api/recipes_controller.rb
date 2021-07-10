class Api::RecipesController < ApplicationController
  before_action :set_meal_plan
  before_action :set_recipe, only: [:show, :update, :destroy]

  def index
    render json: @meal_plan.recipes
  end

  def show
    render json: @recipe
  end

  def create
    @recipe = @meal_plan.recipes.new(recipe_params)
    if @recipe.save
      render json: @recipe
    else
      render json: {errors: @recipe.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: {errors: @recipe.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe.destroy
    render json: {message: 'Recipe deleted'}
  end

  private
    def set_meal_plan
      @meal_plan = Meal_plan.find(params[:meal_plan_id])
    end

    def set_recipe
      @recipe = @meal_plan.recipes.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:title, :decription, :serv_size)
    end
end

