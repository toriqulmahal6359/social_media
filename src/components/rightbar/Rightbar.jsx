import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <div className="birthdayWrapper">
                        <img className="birthdayImg" src="assets/gift.png" alt="" />
                        <span className="birthdayText"><b>Janet Jones</b> and <b>3 other</b> friends have birthday today</span>
                    </div>
                </div>
                <img className="rightbarAdvertise" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {
                        Users.map(on_fr => (
                            <Online key={on_fr.id} online_fr={on_fr}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
