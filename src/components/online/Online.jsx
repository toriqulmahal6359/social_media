import React from 'react'
import "./online.css";

export default function Online({ online_fr }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img className="rightbarProfileImg" src={PF+online_fr.profilePicture} alt="" />
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{online_fr.username}</span>
            </li>
        </div>
    )
}
