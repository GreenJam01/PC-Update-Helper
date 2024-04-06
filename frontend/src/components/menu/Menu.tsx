import { useEffect, useState } from 'react';
import {Button} from '../button/button';
import {Link, useNavigate} from 'react-router-dom';
import EventBus from '../../EventBus';
import { UserData } from '../../types/user';
import { AppRoutes } from '../../constants';
import { authSelectors } from '../../slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app';
import { signoutAction } from '../../store/api-actions';


function Menu(){
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  const user = useAppSelector(authSelectors.getUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    EventBus.on('logout', logOut);

    return () => {
      EventBus.remove('logout', logOut);
    };
  }, []);

  const logOut = () => {
    dispatch(signoutAction());
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
  };
  return(
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={AppRoutes.Main} className="navbar-brand">
            PC Updte Helper
        </Link>
        <div className="navbar-nav mr-auto">
          {/* {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
           */}
        </div>

        {user ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link">
                {user.name}
              </Link>
            </li>
            <li className="nav-item">
              <a href="app/login" className="nav-link" onClick={logOut}>
                  LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={AppRoutes.Signin} className="nav-link">
                  Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={AppRoutes.Signup} className="nav-link">
                  Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Menu;
