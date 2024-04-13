import {Link} from 'react-router-dom';
import { AppRoutes } from '../../constants';
import { authSelectors } from '../../slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { signoutAction } from '../../store/api-actions';
import { Button } from '@mui/material';


function Menu(){
  const user = useAppSelector(authSelectors.getUser);
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(signoutAction());
  };
  return(
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        {user ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              {user.email}
            </li>
            <li className="nav-item">
              <Button className="nav-link" onClick={logOut}>
                  LogOut
              </Button>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={AppRoutes.Signin} className="nav-link">
                <Button>Login</Button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={AppRoutes.Signup} className="nav-link">
                <Button>Sign up</Button>
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Menu;
