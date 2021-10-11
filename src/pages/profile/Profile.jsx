import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Topbar from "../../components/topbar/Topbar";
import { Work, School, Home, LocationCity, Favorite, Add, Send } from "@material-ui/icons";
import { Sidebar } from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
import "../../dummyData";
import axios from "axios";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const username = useParams().username;

    /* const params = useParams();
       console.log(params.username);*/

    const [user, setUser] = useState({});
    useEffect(() => {
        const userFetch = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        userFetch();
    }, [username]);
    return (
        <>
            <div className="profile">
                <Topbar className="topbarProfile" />
            <div className="profileContainer">
                <div className="profileContainerTop">
                    <div className="profileContainerCover">
                        <img src={PF+user.coverPicture} alt="" className="profileCoverImg" />
                        <img src={PF+user.profilePicture || PF+"person/no_avatar.png"} alt="" className="profileUserImg" />
                    </div>
                    <hr className="profileHr" />
                    <div className="profileContainerMenu">
                        <ul className="profileMenuItem">
                            <li className="profileMenuList"><span className="profileMenuListText">Posts</span></li>
                            <li className="profileMenuList"><span className="profileMenuListText">Photos</span></li>
                            <li className="profileMenuList"><span className="profileMenuListText">Friends</span></li>
                            <li className="profileMenuList"><span className="profileMenuListText">Videos</span></li>
                        </ul>
                    </div>
                    <div className="profileContainerInfo">
                        <h4 className="profileUsername">{user.username}</h4>
                        <span className="ProfileNickname">Mahal</span>
                        <div className="profileButton">
                            <button className="followButton"><Add className="followIcon"/> <span className="followText">Follow</span></button>
                            <button className="messageButton"><Send className="messageIcon" /><span className="messageText">Message</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profileDetailsContainer">
                <div className="profileDetailsSideCorner">
                    <div className="profileDescription">
                        <div className="profileDescriptionWrapper">
                            <span className="descriptiontxt">
                            {user.desc}
                            </span>
                        </div>
                    </div>
                    <div className="profileDetailsDescription">
                        <div className="profileDetailsDescriptionWrapper">
                            <ul className="DescriptionLists">
                                <li className="descriptionItem">
                                    <Work className="descriptionIcon" />
                                    <span className="descriptionItemText">Works at Somewhere</span>
                                </li>
                                <li className="descriptionItem">
                                    <School className="descriptionIcon" />
                                    <span className="descriptionItemText">Studied at <strong>Hogwarts Arts School of Witchcraft and Wizardary</strong></span>
                                </li>
                                <li className="descriptionItem">
                                    <Work className="descriptionIcon" />
                                    <span className="descriptionItemText">Works at Somewhere</span>
                                </li>
                                <li className="descriptionItem">
                                    <Home className="descriptionIcon" />
                                    <span className="descriptionItemText">From <strong>{user.city}, {user.from}, Bangladesh</strong></span>
                                </li>
                                <li className="descriptionItem">
                                    <LocationCity className="descriptionIcon" />
                                    <span className="descriptionItemText">Lives in <strong>{user.from}</strong></span>
                                </li>
                                <li className="descriptionItem">
                                    <Favorite className="descriptionIcon" />
                                    <span className="descriptionItemText">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 className="profileDetailsFriendsHeadlines">Friends</h3>
                    <div className="profileDetailsFriends">
                            <div className="profileDetailsFriendsGridContainer">
                                <div className="profileDetailsFriendsGridItem">
                                    <img src={`${PF}person/1.jpg`} alt="" className="profileDetailsFriendsImg" />
                                    <span className="profileDetailsFriendsText">Jannet Jackson</span>
                                </div>
                                <div className="profileDetailsFriendsGridItem">
                                    <img src={`${PF}person/1.jpg`}  alt="" className="profileDetailsFriendsImg" />
                                    <span className="profileDetailsFriendsText">Jannet Jackson</span>
                                </div>
                                <div className="profileDetailsFriendsGridItem">
                                    <img src={`${PF}person/1.jpg`}  alt="" className="profileDetailsFriendsImg" />
                                    <span className="profileDetailsFriendsText">Jannet Jackson</span>
                                </div>
                                <div className="profileDetailsFriendsGridItem">
                                    <img src={`${PF}person/1.jpg`}  alt="" className="profileDetailsFriendsImg" />
                                    <span className="profileDetailsFriendsText">Jannet Jackson</span>
                                </div>
                                <div className="profileDetailsFriendsGridItem">
                                    <img src={`${PF}person/1.jpg`}  alt="" className="profileDetailsFriendsImg" />
                                    <span className="profileDetailsFriendsText">Jannet Jackson</span>
                                </div>
                                <div className="profileDetailsFriendsGridItem">
                                    <img src={`${PF}person/1.jpg`}  alt="" className="profileDetailsFriendsImg" />
                                    <span className="profileDetailsFriendsText">Jannet Jackson</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="profileDetailsPostCorner">
                    <Feed username={username}/>
                </div>
            </div>
            </div>
        </>
    )
}
