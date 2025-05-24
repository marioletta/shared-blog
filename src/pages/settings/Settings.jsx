import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
import {useEffect, useState} from "react";
import {notifyFail, notifySuccess} from "../../utils/ToastNotifications";

export default function Settings() {

    const [person, setPerson] = useState({});
    const id = sessionStorage.getItem("token");

    useEffect(() => {
        fetch(`http://localhost:8080/user/${id}`)
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [id]);

    const update = () => {
        fetch("http://localhost:8080/user", {
            method: "PUT",
            body: JSON.stringify(person),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(json => {
                if (json.id) {
                    notifySuccess("Profile updated!");
                } else {
                    notifyFail(json.message || "Something went wrong!");
                }
            })
    }

    return (
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Settings</span>
                    </div>
                    <br/>
                    <div className="settingsForm">

                        <label>Name</label>
                        <input type="text" placeholder="Jane Doe" defaultValue={person?.name}
                               onChange={(e) => setPerson({...person, name: e.target.value})}
                        />
                        <label>Email</label>
                        <input type="email" placeholder="Jane@greengarden.com" defaultValue={person?.email}
                               onChange={(e) => setPerson({...person, email: e.target.value})}
                        />
                        <label>Password</label>
                        <input type="password" placeholder=""
                               onChange={(e) => setPerson({...person, password: e.target.value})}
                        />
                        <button onClick={update} className="settingsUpdateButton">Update profile</button>
                    </div>
                </div>
                {/*<Sidebar/>*/}
            </div>
        </>

    );
}