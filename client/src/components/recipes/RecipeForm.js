import { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import { withRouter } from 'react-router-dom';

const RecipeForm = ({ addRecipe, id, title, description, serv_size, updateRecipe, handleEditClose, history}) => {
  
  const [recipe, setRecipe] = useState({title: "", description: "", serv_size: "" })

  useEffect( () => {
    if (id) {
      setRecipe({ title, description, serv_size })
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    setRecipe({...recipe, serv_size: parseInt(recipe.serv_size)})
    if (id){
      updateRecipe(id, recipe, history)
      handleEditClose()
    } else {
      addRecipe(recipe)
    }
    setRecipe({title: "", description: "", serv_size: ""})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Title"
          name="title"
          value={recipe.title}
          onChange={(e) => setRecipe({...recipe, title: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="description"
          value={recipe.description}
          onChange={(e) => setRecipe({...recipe, decription: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicServSize">
        <Form.Label>Serving Size</Form.Label>
        <Form.Control
          type="text"
          placeholder="Serving Size"
          name="serv_size"
          value={recipe.serv_size}
          onChange={(e) => setRecipe({...recipe, serv_size: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

const ConnectedRecipeForm = (props) => (
  <RecipeConsumer>
    { value => <RecipeForm {...props} {...value} /> }
  </RecipeConsumer>
)

export default withRouter(ConnectedRecipeForm);