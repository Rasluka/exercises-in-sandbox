import axios from 'axios';

const singInRequest = (singInData) => {
  const config = {
    method: 'POST',
    url: 'https://dummyjson.com/auth/login',
    data: singInData,
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config);
};

const getCurrentUser = (userToken, userId) => {
  const config = {
    method: 'GET',
    url: `https://dummyjson.com/auth/users/${userId}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
  };

  return axios(config);
};

const userService = { singInRequest, getCurrentUser };

export default userService;
