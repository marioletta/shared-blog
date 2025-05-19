import "./post.css";
import {Link} from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <div className="postInfo">
                <img src="https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740" alt=""/>
                <div className="postCategories">
                    <span className="postCategory">Vegetable Gardening</span>
                    <span className="postCategory">Soil & Composting</span>
                </div>
                <span className="postTitle"><Link className="link" to="/post/postId">Feed Your Soil, Feed Your Veggies: The Secret to a Thriving Vegetable Garden</Link></span>
                <span className="postDate">1 hour ago</span>
                <p className="postDescription">
                    Growing your own vegetables isn’t just about planting seeds and watering them—it's about building a living, breathing ecosystem right beneath your feet. The health of your soil is the foundation of every successful vegetable garden. In this post, we’ll explore how enriching your soil naturally through composting can lead to tastier, more nutritious vegetables.
                </p>
            </div>
        </div>
    )
}