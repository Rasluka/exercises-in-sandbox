import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BiUserCircle } from 'react-icons/bi';
import { BsFillKeyFill } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import * as Yup from 'yup';
import userService from './userService';
import './users.css';

const signInSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Username too Short!')
    .required('Provide Username'),
  password: Yup.string()
    .min(7, 'Password too Short!')
    .required('Provide Password'),
});

export default function SignIn() {
  const signInForm = {
    username: 'kminchelle',
    password: '0lelplR',
  };
  const navigate = useNavigate();

  const [isPassworShown, setIsPasswordShown] = useState(false);

  const handleSignInRequest = useCallback(
    async (signInData) => {
      try {
        const res = await userService.singInRequest(signInData);

        if (!res) {
          throw new Error('Invalid credentials');
        }
        localStorage.setItem(
          'usertoken',
          JSON.stringify({ id: res.data.id, token: res.data.token })
        );
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    },
    [navigate]
  );

  const onSignInRequest = (values) => {
    handleSignInRequest(values);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card bg-transparent user-form-container shadow-lg mb-5  rounded">
        <h1 className="user-form-title">Sign In</h1>

        <Formik
          initialValues={signInForm}
          validationSchema={signInSchema}
          onSubmit={onSignInRequest}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-bolder">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text" id="username-ico">
                  <BiUserCircle />
                </span>
                <Field
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  aria-describedby="username-ico"
                />
              </div>
              <ErrorMessage
                name="username"
                component="div"
                className="user-input-error"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bolder">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text" id="password-ico">
                  <BsFillKeyFill />
                </span>
                <Field
                  type={isPassworShown ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className="form-control password-input"
                  aria-describedby="password-ico"
                />
                <span className="input-group-text toggle-show-password-icon">
                  {isPassworShown ? (
                    <AiFillEye
                      cursor="pointer"
                      onClick={() => {
                        setIsPasswordShown(!isPassworShown);
                      }}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      cursor="pointer"
                      onClick={() => {
                        setIsPasswordShown(!isPassworShown);
                      }}
                    />
                  )}
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="user-input-error"
              />
            </div>

            <div className="text-center mb-3">
              <span>Dont have an account? </span>
              {'  '}
              <Link to="/" className="user-link">
                {' '}
                You&apos;re fucked up
              </Link>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-outline-light">
                Sign In
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
