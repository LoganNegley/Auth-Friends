import React, {useState} from 'react';
import axios from 'axios';


function Login(props) {
const [credentials, setCredentials] = useState({
  username:'',
  password:''
});


// form functions
    const handleChanges = event => {
      setCredentials({...credentials, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res =>
        window.localStorage.setItem('token', res.data.payload)
        // navigate user to /protected component
        props.history.push('/protected');
        )
        .catch(err =>
          console.log(err, 'error posting to the login api'))
        

    }


  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
          onChange={handleChanges}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
          onChange={handleChanges}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;