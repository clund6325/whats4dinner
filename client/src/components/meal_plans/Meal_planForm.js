import { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Meal_planConsumer } from '../../providers/Meal_planProvider';
import { withRouter } from 'react-router-dom';

const Meal_planForm = ({ addMeal_plan, id, week_day, meal, theme, updateMeal_plan, handleEditClose, history }) => {

  const [meal_plan, setMeal_plan] = useState({ week_day: "", meal: "", theme: "" })
  useEffect( () => {
    if (id) {
      setMeal_plan({ week_day, meal, theme })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setMeal_plan({...meal_plan})
    if (id) {
      updateMeal_plan(id, meal_plan, history)
      handleEditClose()
    } else {
      addMeal_plan(meal_plan, history)
    }
    setMeal_plan({ week_day: "", meal: "", theme: "" })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicWeekDay">
          <Form.Label>Week Day</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="week day" 
            name="week_day"
            value={meal_plan.week_day}
            onChange={(e) => setMeal_plan({...meal_plan, week_day: e.target.value})}
          />
        </Form.Group>
      <Form.Group controlId="formBasicMeal">
          <Form.Label>Meal</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="meal" 
            name="meal"
            value={meal_plan.meal}
            onChange={(e) => setMeal_plan({...meal_plan, meal: e.target.value})}
          />
        </Form.Group>
      <Form.Group controlId="formBasicTheme">
          <Form.Label>Theme</Form.Label>
            <Form.Control 
              type="text" 
              name="theme"
              value={meal_plan.theme}
              onChange={(e) => setMeal_plan({...meal_plan, theme: e.target.value})}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  )
}
const ConnectedMeal_planForm = (props) => (

  <Meal_planConsumer>
    { value => <Meal_planForm {...props} {...value} /> }
  </Meal_planConsumer>
)
export default withRouter(ConnectedMeal_planForm);


