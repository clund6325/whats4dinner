import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import IngredientForm from './IngredientForm';
import { IngredientConsumer } from '../../providers/IngredientProvider';

const IngredientShow = ({ location, match, deleteIngredient, history }) => {

  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <>
      <h1>Ingredient Show # {location.state.id}</h1>
      {/* <h1>Ingredient Show # {match.params.id}</h1> */}
      <p>
        Food Name: {location.state.food_name}
      </p>
      <p>
        Measurement: {location.state.measurement}
      </p>
      <p>
        Calories: ${location.state.calorie}
      </p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteIngredient(match.params.id, history)}>Delete</Button>
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredient Show # {location.state.id} Edit</Modal.Title>
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
const ConnectedIngredientShow = (props) => (

  <IngredientConsumer>
    { value => <IngredientShow {...props} {...value} /> }
  </IngredientConsumer>
)
export default ConnectedIngredientShow;