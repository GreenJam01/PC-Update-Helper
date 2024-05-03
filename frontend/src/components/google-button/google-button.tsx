import { Link } from 'react-router-dom';
import myImage from '../../resourses/google.png';
import { AppRoutes } from '../../constants';

import './google-button.css'
import './google-buttonMedia.css'

export function GoogleButton(){
  return(
    <Link className={'google-button'} to = {AppRoutes.Main} title={'Google'}>
        <img width="50" height="50" src={myImage} alt="Main Logo" className='google-button-icon'></img>
        <div className='google-sign-in'>Sign in with Google</div>
    </Link>
  );
}
