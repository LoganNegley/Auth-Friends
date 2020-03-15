import React, {useState} from 'react';

function Login() {
const [credentials, setCredentials] = useState({
  username:'',
  password:''
});


// form functions
    const handleChanges = event => {

    }

    const handleSubmit = event => {
        event.preventDefault();
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