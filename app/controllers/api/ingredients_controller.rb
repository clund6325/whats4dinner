class Api::IngredientsController < ApplicationController
    before_action :set_recipe

    before_action :set_ingredient, only: [:show, :update, :destroy]

    def index
      render json: @recipe.ingredients
    end

    def show
      render json: @ingredient
    end

    def create 
      @ingredient = @recipe.ingredients.new(ingredient_params)
      if @ingredient.save 
        render json: @ingredient
      else
        render json: { errors: @ingredient.errors }, status: :unprocessable_entity
      end
    end

    def update
      if @ingredient.update(ingredient_params)
        render json: @ingredient
      else
        render json: { errors: @ingredient.errors }, status: :unprocessable_entity
      end
    end

    def destroy
      @ingredient.destroy
      render json: { message: "Ingredient deleted" }
    end

    private 
      def set_recipe
        @recipe = Recipe.find(params[:recipe_id])
      end

      def set_ingredient
        @ingredient = @recipe.ingredients.find(params[:id])
      end

      def ingredient_params
        params.require(:ingredient).permit(:food_name, :measurement, :calories)
      end
end