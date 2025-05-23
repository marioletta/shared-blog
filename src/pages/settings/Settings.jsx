import "./settings.css"
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Settings() {

    const {setLoggedIn} = useContext(AuthContext);

    function logout() {
        sessionStorage.removeItem("token");
        setLoggedIn(false);
    }

    return (
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Settings</span>
                        <button onClick={logout} className="settingsUpdateButton">Sign Out</button>
                    </div>
                    <br/>
                    <form className="settingsForm">

                        <label>Name</label>
                        <input type="text" placeholder="Jane Doe"/>
                        <label>Email</label>
                        <input type="email" placeholder="Jane@greengarden.com"/>
                        <label>Password</label>
                        <input type="password"/>
                        <button className="settingsUpdateButton">Update profile</button>
                        <button className="settingsUpdateButton">Delete account</button>
                    </form>
                </div>
                <Sidebar/>
            </div>
        </>

    );
}