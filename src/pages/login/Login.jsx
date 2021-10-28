import { useRef, useContext, useState, useEffect } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext"
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext); 
    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    // const [progress, setProgress] = useState(0)
    // useEffect(() => {
    //     const timer = setInterval(()=> {
    //         setProgress((prev)=> (prev >= 100 ? 0 : prev + 10))
    //     }, 600)
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, []);

    console.log(user);
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginIcon">AnimalMedia</h3>
                    <span className="loginDesc">Connects with animal Friends and the world around you on AnimalMedia</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onClick={handleLogin}>
                        <input placeholder="Email address or Phone Number" type="email" className="loginInput" ref={email} required/>
                        <input placeholder="Password" type="password" minLength="6" className="loginInput" ref={password} required/>
                        <button className="loginButton" disabled={isFetching}>{ isFetching ? (<CircularProgress color="white" size="25px"/>) : ("Log In") }</button>
                        <span className="loginForgot">Forgotten Password ?</span>
                        <hr className="loginHr"/>
                        <button className="loginRegisterButton">{ isFetching ? (<CircularProgress color="white" size="25px"/>) : ("Create New Account") }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
