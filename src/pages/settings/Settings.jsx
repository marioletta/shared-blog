import "./settings.css"
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Your Account</span>
                        <span className="settingsDeleteTitle">Delete Account</span>
                    </div>
                    <br/>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <label className="fileInputUserIcon" htmlFor="fileInput"><i className="topUserIcon fa-solid fa-user"></i></label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                        <label>Name</label>
                        <input type="text" placeholder="Jane Doe"/>
                        <label>Email</label>
                        <input type="email" placeholder="Jane@greengarden.com"/>
                        <label>Password</label>
                        <input type="password"/>
                        <button className="settingsUpdateButton">Update</button>
                    </form>
                </div>
                <Sidebar/>
            </div>
        </>

    );
}