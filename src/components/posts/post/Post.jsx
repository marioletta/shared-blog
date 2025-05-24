import "./post.css";
import {Link} from "react-router-dom";
import format from "date-fns/format";

export default function Post({ post }) {
    return (
        <div className="post">
            <div className="postInfo">
                <div className="postImgWrapper">
                    <img src={post?.image} alt="" className="postImg" />
                    <Link className="link" to={`/post/${post?.id}`}>
                    <div className="postOverlay">
                        <div className="postOverlayContent">
                            <i className="fa fa-eye"></i>
                            <span> View Article</span>
                        </div>
                    </div>
                    </Link>
                    <div className="postDate">
                        <span className="postDay">{format(new Date(post?.timestamp), 'd')}</span>
                        <span className="postMonth">{format(new Date(post?.timestamp), 'MMM')}</span>
                    </div>
                </div>
                <div className="postCategories">
                    {post.category?.map(cat => (
                        <span key={cat.id} className="postCategory">{cat.name}</span>
                    ))}
                </div>
                <span className="postTitle"><Link className="link" to={`/post/${post?.id}`}>{post?.title}</Link></span>

                <p className="postDescription">
                    {post?.content}
                </p>
            </div>
        </div>
    )
}