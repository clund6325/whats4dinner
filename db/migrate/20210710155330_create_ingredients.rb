class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :food_name
      t.string :measurement
      t.integer :calories
      t.belongs_to :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
