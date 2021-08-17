import "./post.css"
import { MoreVert } from "@material-ui/icons";

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                        <span className="postUsername">Jannet Jones</span>
                        <span className="symbol-bullet">•</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postMore"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey, It's my First Post :)</span>
                    <img src="assets/post/1.jpg" alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">92 people Liked It</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">15 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
