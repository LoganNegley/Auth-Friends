import React, {useState, useEffect} from 'react';


function FriendsCard(props) {

  return (
    <div className="FriendsCard">
      {props.friends.map(friend => (
          <>
          <h3>{friend.name}</h3>
          <p>{friend.email}</p>
          </>
      ))}
    </div>
  );
}

export default FriendsCard;