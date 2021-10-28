import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="Topclass">
                    <img src="/assets/person/1.jpg" className="shareProfileImg" alt="" />
                    <input placeholder="What's in Your Mind, Jannet?" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="s_Bottom">
                    <div className="s_Option">
                        <div className="s_Options">
                            <PermMedia htmlColor="tomato" className="s_icons"/>
                            <span className="s_options_txt">Photo or Video</span>
                        </div>
                        <div className="s_Options">
                            <Label htmlColor="blue" className="s_icons"/>
                            <span className="s_options_txt">Tag</span>
                        </div>
                        <div className="s_Options">
                            <Room htmlColor="green" className="s_icons"/>
                            <span className="s_options_txt">Location</span>
                        </div>
                        <div className="s_Options">
                            <EmojiEmotions htmlColor="goldenrod" className="s_icons"/>
                            <span className="s_options_txt">Feelings</span>
                        </div>
                    </div>
                    <button className="s_buttons">Share</button>
                </div>
            </div>
        </div>
    )
}
