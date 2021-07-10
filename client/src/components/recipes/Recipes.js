import { Collapse, Jumbotron } from 'react-bootstrap';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

const Recipes = () => (
  <>
    <Jumbotron>
      <h1>Recipes</h1>
    </Jumbotron>
    <RecipeForm />
    <RecipeList />
  </>
)

export default Recipes;