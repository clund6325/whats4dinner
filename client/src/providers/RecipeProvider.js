import React, {useState} from 'react';
import axios from 'axios';

export const RecipeContext = React.createContext();
export const RecipeConsumer = RecipeContext.Consumer;

const RecipeProvider = ({children}) => {

  const [recipes, setRecipes] = useState([])
  
  const getAllRecipes = () => {
    axios.get(`/api/meal_plans/${id}/recipes`)
      .then(res => {
        setRecipes(res.data)
      })
      .catch( err => console.log(err) )
  }

  const addRecipe = (recipe) => {
    axios.put(`/api/meal_plans/${id}/recipes`, {recipe} )
      .then( res => {
        setRecipes([...recipes, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateRecipe = (id, recipe, history) => {
    axios.put(`/api/meal_plans/${id}/recipes/${id}`, {recipe})
      .then( res => {
        const updatedRecipes = recipes.map( r => {
          if (recipes.id == id){
            return res.data
          }
          return r
        })
        setRecipes(updatedRecipes)
        history.push("/meal_plans/:meal_plan_id/recipes")
      })
      .catch( err => console.log(err) )
  }

  const deleteRecipe = (id, history) => {
    axios.delete(`/api/meal_plans/${id}/recipes/${id}`)
      .then( res => {
        setRecipes(recipes.filter(r => r.id !== id))
        alert(res.data.message)
        history.push("/recipes")
      })
      .catch( err => console.log(err))
  }

  return(
    <RecipeContext.Provider value={{
      recipes,
      getAllRecipes: getAllRecipes,
      addRecipe: addRecipe,
      updateRecipe: updateRecipe,
      deleteRecipe: deleteRecipe,
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;