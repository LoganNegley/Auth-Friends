import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosAuth.js/axiosWithAuth';
import FriendsCard from '../components/FriendsCard';
import AddFriend from '../components/AddFriend';
import {Link, Route, Switch} from 'react-router-dom';


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
  }, [friends]);


  return (
    <div className="FriendsList">
      <h1>List of Friends</h1>
      <Link to='/addfriend'>
      <button type='button'>Add A New Friend</button>
      </Link>
      <FriendsCard friends={friends}/>
      {/* <AddFriend/> */}
      <Switch>
      <Route path='/addfriend' component={AddFriend}/>
      </Switch>
    </div>
  );
}

export default FriendsList;