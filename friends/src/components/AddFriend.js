import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosAuth.js/axiosWithAuth';


function AddFriend() {
    const [newFriend, setNewFriend] = useState({
    id: date.new(),
    name: '',
    age: '',
    email: '',
    });


  return (
    <div className="add-friend-form">
        <form>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={newFriend.name}
                // onChange={}
            />
            <input
                type='text'
                name='age'
                placeholder='Age'
                value={newFriend.age}
                // onChange={}
            />
            <input
                type='text'
                name='email'
                placeholder='Email'
                value={newFriend.email}
                // onChange={}
            />
            <button type='submit'>Add A New Friend</button>
        </form>
    </div>
  );
}

export default AddFriend;