import "./register.css"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Register() {
    const [person, setPerson] = useState({});

    const signup = () => {
        fetch("http://localhost:8080/signup", {
            method: "POST",
            body: JSON.stringify(person),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(json => {
                if (json.id) {
                    sessionStorage.setItem("token", json.id);
                } else {
                    alert("Something went wrong!");
                }
                // console.log(json);
            })
    }

    return(
        <>

            <div className="register">
                <span className="registerTitle">Sign up</span>
                <div className="registerForm">
                    <label>Name</label>
                    <input onChange={(e) => setPerson({...person, name: e.target.value})} type="text" placeholder="Enter your name..." />
                    <label>Email</label>
                    <input onChange={(e) => setPerson({...person, email: e.target.value})} type="text" placeholder="Enter your email..." />
                    <label>Password</label>
                    <input onChange={(e) => setPerson({...person, password: e.target.value})} type="password" placeholder="Enter your password..." />
                    <button className="registerSubmit" onClick={signup}>Create account</button>
                    <button className="registerLoginInstead">
                        <Link className="link" to="/login">Already have an account?</Link>
                    </button>
                </div>
            </div>

        </>

    )
}