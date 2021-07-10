import { useEffect } from 'react';
import { Meal_planConsumer } from '../../providers/Meal_planProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal_planList = ({ meal_plans, getAllMeal_plans }) => {
  useEffect( () => {
    getAllMeal_plans()
  }, [])
  return (
    <>
      <ListGroup>
        { meal_plans.map( m => 
          <Link to={{
            pathname: `/meal_plans/${m.id}`,
            state: { ...m }
          }}>
            <ListGroup.Item>Meal Plan during: {m.week_day}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}
const ConnectedMeal_planList = (props) => (
  <Meal_planConsumer>
    { value => 
      <Meal_planList {...props} {...value} />
    }
  </Meal_planConsumer>
)
export default ConnectedMeal_planList;