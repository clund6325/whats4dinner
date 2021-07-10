days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

meals = ["Breakfast", "Lunch", "Dinner"]

5.times do

    # user = User.create(
    #   password = password,
    #   email: Faker::Internet.email
    # )

    meal_plan = MealPlan.create(
      week_day: days.sample,
      meal: Faker::Restaurant.type,
      theme: Faker::Nation.nationality,
      user_id: 1
    )

    3.times do
        recipe = Recipe.create( 
        title: Faker::Food.dish,
        description: Faker::Food.description,
        serv_size: Faker::Number.between(from: 1, to: 10),
        meal_plan_id: meal_plan.id
      )

      2.times do
        Ingredient.create(
            food_name: Faker::Food.ingredient,
            measurement: Faker::Food.measurement,
            calories: Faker::Address.building_number,
            recipe_id: recipe.id
        )
      end
    end
  end

  puts "Data seeded"