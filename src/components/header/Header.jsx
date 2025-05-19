import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerOverlay"></div>
            <div className="headerTitles">
                <span className="headerTitleLg">Grow your own food</span><br/>
                <span className="headerTitleSm">...and eat healthy!</span>
            </div>
            <img className="headerImg" src="https://media.istockphoto.com/id/1141455406/vector/collection-of-hand-drawn-vegetables-black-and-white.jpg?s=612x612&w=0&k=20&c=q17RgdlmGt4gxB5LaIsPNW9Tyhj5TIxdGqSWHU-7yGY="  alt=""/>
        </div>
    )
}