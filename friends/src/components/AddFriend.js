import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosAuth.js/axiosWithAuth';


function AddFriend() {
    const [newFriend, setNewFriend] = useState({
    id: Date.now(),
    name: '',
    age: '',
    email: '',
    });

    const handleChanges= event => {
        setNewFriend({...newFriend, [event.target.name] : event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => console.log(res))
    };


  return (
    <div className="add-friend-form">
        <form onSubmit= {handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={newFriend.name}
                onChange={handleChanges}
            />
            <input
                type='text'
                name='age'
                placeholder='Age'
                value={newFriend.age}
                onChange={handleChanges}
            />
            <input
                type='text'
                name='email'
                placeholder='Email'
                value={newFriend.email}
                onChange={handleChanges}
            />
            <button type='submit'>Add A New Friend</button>
        </form>
    </div>
  );
}

export default AddFriend;