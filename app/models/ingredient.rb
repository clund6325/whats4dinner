class Ingredient < ApplicationRecord
  belongs_to :recipe

  validates :food_name, :measurement, :calories, presence: true
end
