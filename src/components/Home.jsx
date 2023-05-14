import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../UserContext';

function Home() {
  const currrentUser = useUserContext();
  const navigate = useNavigate();

  if (!currrentUser) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center">New App</h1>

      <h2 className="text-center">Hellox, {currrentUser.firstName}!</h2>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => {
            localStorage.removeItem('usertoken');
            navigate('/login');
          }}
        >
          Log Out
        </button>
      </div>
    </>
  );
}

export default Home;
