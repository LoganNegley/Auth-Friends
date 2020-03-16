import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosAuth.js/axiosWithAuth';


function FriendsList() {
    const [friends, setFriends] = useState([])
  
      useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => { 
            // res.data
            setFriends(res.data)
        })
        .catch(err => {
             console.log(err, 'error getting list of friends from api'
            )})
  }, []);


  return (
    <div className="FriendsList">
      <h1>List of Friends</h1>
      <button>Add A New Friend</button>
      {friends.map(friend => (
          <h3>{friend.name}</h3>
          <p>{friend.email}</p>
      ))}
    </div>
  );
}

export default FriendsList;