import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <p className="sidebarText">
                    Hi there! Welcome to my little corner of the internet where I share my passion for gardening. I’ve
                    been immersed in the world of plants, flowers, and nature for as long as I can remember.
                    Whether you’re a beginner or have a green thumb, this blog is here to inspire you, provide helpful
                    tips, and share stories from my gardening adventures.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Vegetable Gardening</li>
                    <li className="sidebarListItem">Herb Gardening</li>
                    <li className="sidebarListItem">Fruit Gardening</li>
                    <li className="sidebarListItem">Soil & Composting</li>
                    <li className="sidebarListItem">Pests & Diseases</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarSocialIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarSocialIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarSocialIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarSocialIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}