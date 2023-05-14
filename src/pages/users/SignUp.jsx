import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>

      <Link to="/login">Sign In</Link>
    </>
  );
}
