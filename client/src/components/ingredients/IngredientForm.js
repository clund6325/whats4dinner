import { useState, useEffect} from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IngredientConsumer } from '../../providers/IngredientProvider';
import { withRouter } from 'react-router-dom';

const IngedientForm = ({ addIngredient, id, food_name, measurement, calories, updateIngredient, handleEditClose, history }) => {
  const [ingredient, setIngredient] = useState({ food_name: "", measurement: "", calories: ""})
  useEffect( () => {
    if (id) {
      setIngredient({ food_name, measurement, calories })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIngredient({...ingredient, calories: parseInt(ingredient.calories)})
    if (id) {
      updateIngredient(id, ingredient, history)
      handleEditClose()
    } else {
      addIngredient(ingredient)
    }
    setIngredient({ food_name: "", measurement: "", calories: ""})
  }
  
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicFoodName">
        <Form.Label>Food Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Food Name"
          name="food_name"
          value={ingredient.food_name}
          onChange={(e) => setIngredient({...ingredient, food_name: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicMeasurement">
        <Form.Label>Measurement</Form.Label>
        <Form.Control
          type="text"
          placeholder="Measurement"
          name="measurement"
          value={ingredient.measurement}
          onChange={(e) => setIngredient({...ingredient, measurement: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCalories">
        <Form.Label>Calories</Form.Label>
        <Form.Control
          type="text"
          placeholder="Calories"
          name="calories"
          value={ingredient.calories}
          onChange={(e) => setIngredient({...ingredient, calories: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

const ConnectedIngredientForm = (props) => (
  <IngredientConsumer>
    { value => <IngedientForm {...props} {...value} /> }
  </IngredientConsumer>
)

export default withRouter(ConnectedIngredientForm);