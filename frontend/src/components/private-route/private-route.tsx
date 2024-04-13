import {Location, Navigate, useLocation} from 'react-router-dom';
import { AuthorizationStatus, AppRoutes } from '../../constants';
import { useAppSelector } from '../../hooks/use-app';
import { authSelectors } from '../../slices/authSlice';

type PrivateRouteProps = {
    onlyUnAuth?: boolean;
    children: JSX.Element;
  }

  type FromState = {
    from?: Location;
  }

function PrivateRoute({onlyUnAuth, children}: PrivateRouteProps): JSX.Element {
  const location : Location<FromState> = useLocation() as Location<FromState>;
  const authorizationStatus = useAppSelector(authSelectors.getAuthorizationStatus);
  if (onlyUnAuth && authorizationStatus === AuthorizationStatus.Auth){
    const from = location.state?.from || {pathname: AppRoutes.Main};
    return <Navigate to={from}/>;
  }

  if (!onlyUnAuth && authorizationStatus === AuthorizationStatus.NoAuth){
    return <Navigate state = {{from: location}} to={AppRoutes.Signin}/>;
  }
  return children;
}

export default PrivateRoute;
