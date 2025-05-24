import "./topbar.css"
import { Link } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import {ToastContainer} from "react-toastify";

export default function TopBar() {

    const {loggedIn} = useContext(AuthContext);

    const {setLoggedIn} = useContext(AuthContext);

    function logout() {
        sessionStorage.removeItem("token");
        setLoggedIn(false);
    }

    return (
        <div className="top">

            <div className="topLeft">
                <Link className="link" to="/">
                    <i className="topLogo fa-solid fa-seedling"></i>
                    <span className="topLogoText">GreenGarden</span>
                </Link>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/team">Team</Link></li>
                    {
                        loggedIn ? (
                            <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
                        ) : ("")
                    }
                </ul>
            </div>

            <div className="topRight">
                {/*<i className="topIcon fa-brands fa-square-facebook"></i>*/}
                {/*<i className="topIcon fa-brands fa-square-twitter"></i>*/}
                {/*<i className="topIcon fa-brands fa-square-pinterest"></i>*/}
                {/*<i className="topIcon fa-brands fa-square-instagram"></i>*/}
                {/*<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>*/}
                {
                    loggedIn ? (
                            <ul className="topList">
                                <li onClick={logout} className="topListItem">LOG OUT</li>
                                <li className="topListItem"><Link className="link" to="/settings"><i className="topUserIcon fa-regular fa-circle-user"></i></Link></li>
                            </ul>
                    ) : (
                            <ul className="topList">
                                <li className="topListItem"><Link className="link" to="/login">LOG IN</Link></li>
                                <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                            </ul>
                    )
                }
            </div>
        </div>
    )
}