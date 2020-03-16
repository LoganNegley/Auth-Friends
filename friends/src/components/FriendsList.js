import React, {useState, useEffect} from 'react';
import axios from 'axios';


function FriendsList() {
    const [friends, setFriends] = useState([])
    const token= window.localStorage.getItem('token');
      useEffect(() => {
        axios.get('http://localhost:5000/api/friends', {
            header:{
                authorization:token
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err, 'error getting list of friends from api'))
  });


  return (
    <div className="FriendsList">
      <h1>List of Friends</h1>
    </div>
  );
}

export default FriendsList;