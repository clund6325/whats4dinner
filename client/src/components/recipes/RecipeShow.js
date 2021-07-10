import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import RecipeForm from './RecipeForm';
import {RecipeConsumer} from '../../providers/RecipeProvider';

const RecipeShow = ({ location, match, deleteRecipe, history}) => {

  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return (
    <>
      <h1> {location.state.tite }</h1>
      <h2>Description:</h2>
      <p>
        {location.state.description}
      </p>
      <p>Serving Size: {location.state.serv_size}</p>
      <Button variant="outline-info" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="outline-danger" onClick={() => deleteRecipe(match.params.id, history)}>Delete</Button>
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Name: {location.state.title} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipeForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedRecipeShow = (props) => (
  <RecipeConsumer>
    { value => <RecipeShow {...props} {...value} />}
  </RecipeConsumer>
)

export default ConnectedRecipeShow;