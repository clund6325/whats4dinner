import { Link, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Navbar = ({ user, handleLogout, history }) => {

  // show nav items base on login
  const rightNavItems = () => {
    if (user) {
      // links that user see when logged in
      return (
        <>
          <Link onClick={() => handleLogout(history) }>
            Logout
          </Link>
        </>
      )
    } else {
      // links the user see when not logged in
      return (
        <>
          <Link to="/login">
            Login
          </Link>
          <Link to="/register">
            Register
          </Link>
        </>
      )
    }
  }
  // show up regardless of logged in or not
  return(
    <nav>
      <Link to="/">
        Home
      </Link>
      { rightNavItems() }
    </nav>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar);