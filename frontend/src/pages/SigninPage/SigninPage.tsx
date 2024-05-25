import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { signinAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app';
import { GoogleButton } from '../../components/google-button/google-button';
import './SigninPage.css';
import './SigninPageMedia.css';
const SigninPage = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const initialValues: {
    username: string;
    password: string;
  } = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setMessage('');
    setLoading(true);

    dispatch(signinAction({username, password}));
  };

  return (
    <div className="col-md-12 fullscreen">
      <div className='signin-container'>
        <div className='main-container'>
          <div className="card card-container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form className='login-password'>
                <div className="form-group">
                  <label className='form-group-item' htmlFor="username">Username:</label>
                  <Field name="username" type="text" className="form-control" />
                  <div className='alert-container'>
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="alert alert-danger errorMessage"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className='form-group-item' htmlFor="password">Password: </label>
                  <Field name="password" type="password" className="form-control" />
                  <div className='alert-container'>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="alert alert-danger errorMessage"
                    />
                  </div>
                </div>

                <div className="form-group login-button">
                  <div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                  </div>
                </div>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </Form>
            </Formik>
            <div className='container-avatar'>
              <div className='pcUp-title'>
                PC-UP
              </div>
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
            </div>
          </div>
        </div>
        <div className='otherWays'>
          <div className='otherWays-text'>Другие способы </div>
          <GoogleButton/>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
