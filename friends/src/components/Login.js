import React, {useState} from 'react';
import axios from 'axios';


function Login() {
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
        .then(response => {
          console.log(response);
        })
        .catch(err=>{
          console.log(err, 'error posting to the login api');
        })
        

    }


  return (
    <div className='login'>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={credentials.username}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={credentials.password}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;