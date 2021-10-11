import "./post.css"
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) { 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setisLiked] = useState(false);
    const [heart, setHeart] = useState(post.hearts);
    const [isHeart, setisHeart] = useState(false);

    const likeHandler =() => {
        setLike(isLiked? like-1 : like+1);
        setisLiked(!isLiked);
    }

    const heartHandler =() => {
        setHeart(isHeart? heart-1 : heart+1);
        setisHeart(!isHeart);
    }

    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg" src={ PF+user.profilePicture || PF+"person/no_avatar.png" } alt="" />
                        </Link>
                        <span className="postUsername">{
                            user.username
                        }</span>
                        <span className="symbol-bullet">•</span>&nbsp;
                        <span className="postDate">{ format(post.createdAt) }</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postMore"/>
                    </div>
                </div>
                <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img src={PF+post?.image} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} alt="" onClick={ likeHandler } />
                        <img className="likeIcon" src={`${PF}heart.png`}  alt="" onClick={ heartHandler }/>
                        <span className="postLikeCounter">{like + heart} people Liked It</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{post.comments} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
