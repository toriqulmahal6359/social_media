import "./login.css";

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
                        <input placeholder="Email address or Phone Number" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgotten Password ?</span>
                        <hr className="loginHr"/>
                        <button className="loginRegisterButton">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
