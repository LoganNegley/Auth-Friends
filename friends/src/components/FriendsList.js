import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosAuth.js/axiosWithAuth';


function FriendsList() {
    const [friends, setFriends] = useState([])
  
      useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => { 
            console.log(res)}
        )
        .catch(err => {
             console.log(err, 'error getting list of friends from api'
            )})
  }, []);


  return (
    <div className="FriendsList">
      <h1>List of Friends</h1>
    </div>
  );
}

export default FriendsList;