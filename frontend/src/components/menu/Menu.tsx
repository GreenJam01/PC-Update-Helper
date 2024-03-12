import { useEffect, useState } from "react";
import {Button} from "../button/button";
import {Link, useNavigate} from "react-router-dom";
import IUser from "../../types/user.type";
import { getCurrentUser, logout } from "../../services/authService";
import EventBus from "../../EventBus";


function Menu(){
    const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
    const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  
    useEffect(() => {
      const user = getCurrentUser();
  
      if (user) {
        setCurrentUser(user);
        setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      }
  
      EventBus.on("logout", logOut);
  
      return () => {
        EventBus.remove("logout", logOut);
      };
    }, []);
  
    const logOut = () => {
      logout();
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setCurrentUser(undefined);
    };
    return(
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/app"} className="navbar-brand">
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
           */}</div>
  
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
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
                <Link to={"app/login"} className="nav-link">
                  Login
                </Link>
              </li>
  
              <li className="nav-item">
                <Link to={"app/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        </div>
    )
}

export default Menu;