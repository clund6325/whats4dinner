import { Switch, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Meal_plans from './components/meal_plans/Meal_plans'

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute exact path='/home' component={Home} />
          <ProtectedRoute exact path='/meal_plans' component={Meal_plans} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;