import "./register.css"
import {Link} from "react-router-dom";

export default function Register() {
    return(
        <>

            <div className="register">
                <span className="registerTitle">Sign up</span>
                <form className="registerForm">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name..." />
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." />
                    <button className="registerSubmit">Create account</button>
                    <button className="registerLoginInstead">
                        <Link className="link" to="/login">Already have an account?</Link>
                    </button>
                </form>
            </div>

        </>

    )
}