import { useEffect } from 'react';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeList = ({ meal_plan_id, recipes, getAllRecipes }) => {

  useEffect( () => {
    getAllRecipes()
  }, [])
  return(
    <>
      <ListGroup>
        { recipes.map( r => 
          <Link to={{
            pathname: `/meal_plans/${meal_plan_id}/recipes/${r.id}`,
            state: { ...r }
          }}>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

const ConnectedRecipeList = (props) => (
  <RecipeConsumer>
    { value => <RecipeList {...props} {...value} />}
  </RecipeConsumer>
)

export default ConnectedRecipeList;