import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Meal_planForm from './Meal_planForm';
import { Meal_planConsumer } from '../../providers/Meal_planProvider';

const Meal_planShow = ({ location, match, deleteMeal_plan, history }) => {

  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <>
      <h1>Meal Plan # {location.state.id}</h1>
      <p>
        Week Day: {location.state.week_day}
      </p>
      <p>
        Meal: {location.state.meal}
      </p>
      <p>
        Theme: {location.state.theme}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteMeal_plan(match.params.meal_plan_id, history)}>Delete</Button>
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Meal_plan # {location.state.id} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Meal_planForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
const ConnectedMeal_planShow = (props) => (

  <Meal_planConsumer>
    { value => <Meal_planShow {...props} {...value} /> }
  </Meal_planConsumer>
)
export default ConnectedMeal_planShow;