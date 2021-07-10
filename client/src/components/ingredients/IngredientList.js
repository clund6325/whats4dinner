import Ingredient from './IngredientShow';

const IngredientList = ({ recipeId, ingredients, updateIngredients, deleteIngredients }) => (
  <>
    { ingredients.map( p => 
      <Ingredient {...p} updateIngredient={updateIngredient} deleteIngredient={deleteIngredient} />  
    )}
  </>
)
export default IngredientList;