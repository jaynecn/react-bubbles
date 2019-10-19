import React, { useState } from "react";
import axios from 'axios';

const loginApi = 'http://localhost:5000/api/login'

function Login(props) {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const [newUser, setNewUser] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(loginApi, newUser)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/api/colors');
      })
  }

  const onValueChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          Username
          <input type="text" name="username" placeholder="username" value={newUser.username} onChange={(event) => onValueChange(event)} />
          <br />
          Password
          <input type="text" name="password" placeholder="password" value={newUser.password} onChange={(event) => onValueChange(event)} />
          <br />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
