import "./post.css";
import {Link} from "react-router-dom";
import format from "date-fns/format";

export default function Post({ post }) {
    return (
        <div className="post">
            <div className="postInfo">
                <img src={post?.image} alt=""/>
                <div className="postCategories">
                    <span className="postCategory">Vegetable Gardening</span>
                    <span className="postCategory">Soil & Composting</span>
                </div>
                <span className="postTitle"><Link className="link" to={`/post/${post?.id}`}>{post?.title}</Link></span>
                <span className="postDate">{format(new Date(post?.timestamp), 'MMMM d, yyyy')}</span>
                <p className="postDescription">
                    {post?.content}
                </p>
            </div>
        </div>
    )
}