import "./register.css";

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginIcon">AnimalMedia</h3>
                    <span className="loginDesc">Connects with animal Friends and the world around you on AnimalMedia</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email address" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <hr className="loginHr"/>
                        <button className="loginRegisterButton">Log Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
