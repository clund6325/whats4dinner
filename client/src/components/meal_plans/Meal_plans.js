import { Jumbotron } from 'react-bootstrap';
import Meal_planList from './Meal_planList';
import Meal_planForm from './Meal_planForm';

const Meal_plans = () => (
  <>
    <Jumbotron>
      <h1>Meal Plan Page</h1>
    </Jumbotron>
    <CheckoutForm />
    <CheckoutList />
  </>
)
export default Meal_plans;