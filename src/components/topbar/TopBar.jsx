import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = true;

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
                    <i className="topListItem"><Link className="link" to="/">Home</Link></i>
                    <i className="topListItem"><Link className="link" to="/about">About</Link></i>
                    <i className="topListItem"><Link className="link" to="/contact">Contact</Link></i>
                    <i className="topListItem"><Link className="link" to="/write">Write</Link></i>
                    {
                        user ? (
                            <i className="topListItem"><Link className="link" to="/log-out">Log out</Link></i>
                        ) : (
                            ""
                        )
                    }

                </ul>
            </div>

            <div className="topRight">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                {
                    user ? (
                        <i className="topUserIcon fa-solid fa-user"></i>
                    ) : (
                        <>
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">LOG IN</Link></li>
                            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                        </ul>
                        </>
                    )
                }
            </div>
        </div>
    )
}