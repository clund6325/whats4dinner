class Recipe < ApplicationRecord
  belongs_to :meal_plan
  has_many :ingredients, dependent: :destroy

  validates :title, :description, :serv_size, presence: true
end
