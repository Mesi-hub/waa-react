import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './Login.css';

const Login = (props) => {

  const newLoginForm = useRef();

  const navigate = useNavigate();

  const LoginHandler = (e) => {
    e.preventDefault();
    const form = newLoginForm.current;
    const data = {
      username: form['username'].value,
      password: form['password'].value
    };
    console.log(data);
    axios.post('http://localhost:8080/api/v1/users', data)
      .then(data => {
        navigate('/users');
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  return (
    <div className="NewProduct">
      <form ref={newLoginForm} onSubmit={LoginHandler}>
        <h1>Login</h1>

        <label>User Name</label>
        <input type="text"
          label={'title'}
          name={'title'}
        />

        <label>Password</label>
        <input type="text"
          label={'author'}
          name={'author'}
        />
        <button>Login </button>
      </form>

    </div>
  );

}

export default Login;