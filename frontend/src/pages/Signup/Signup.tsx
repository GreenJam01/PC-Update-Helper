import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signupAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../hooks/use-app';


const SignupPage: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const initialValues: AuthData = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        'len',
        'The username must be between 3 and 20 characters.',
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required('This field is required!'),
  });

  const handleRegister = (formValue: AuthData) => {
    const { username, email, password } = formValue;
    dispatch(signupAction({username, email, password}));

  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
