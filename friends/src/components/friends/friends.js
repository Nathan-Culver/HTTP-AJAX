import React from 'react';
import Friend from '../friend/friend';

const Friends = props => {
    return (
        <div className="friends">
           {props.friends.map(friend => <Friend friend={friend} deleteFriend={props.deleteFriend} handleFriendUpdate={props.handleFriendUpdate} key={friend.id}/>)}
        </div>
    );
}

export default Friends;