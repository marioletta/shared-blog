import "./login.css"
import {Link} from "react-router-dom";

export default function Login() {
    return(
        <>

            <div className="login">
                <span className="loginTitle">Login</span>
                <form className="loginForm">
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." />
                    <button className="loginSubmit">Log in</button>
                    <button className="loginRegisterSubmit">
                        <Link className="link" to="/register">Sign up?</Link>
                    </button>
                </form>
            </div>
        </>

    )
}