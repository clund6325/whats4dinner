import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import {Button, Form} from 'react-bootstrap';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', name: '' }) 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
    } else {
      alert('Passwords Do Not Match!')
    }
  }
  
  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            required         
            name='email'
            value={user.email}
            placeholder='Email'
            type='email'
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name='password'
            value={user.password}
            placeholder='Password'
            type='password'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            required
            name='passwordConfirmation'
            value={user.passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={(e) => setUser({ ...user, passwordConfirmation: e.target.value })}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)

export default ConnectedRegister;