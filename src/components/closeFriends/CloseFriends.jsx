import React from 'react'
import "./closefriends.css";

export default function CloseFriends({ friends }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="sidebarFriend">
                <img src={PF+friends.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{friends.username}</span>
            </li>
        </div>
    )
}
