import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { BiUserCircle } from 'react-icons/bi';
import { BsFillKeyFill } from 'react-icons/bs';

export default function SignIn() {
  const signInForm = {
    username: '',
    password: '',
  };

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center vh-100">
        <Formik
          initialValues={signInForm}
          className="card shadow-lg p-3 mb-5 bg-body rounded"
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
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  aria-describedby="password-ico"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-outline-light">
              Sign In
            </button>
          </Form>
        </Formik>
      </div>

      <Link to="/register">Sign Up</Link>
    </>
  );
}
