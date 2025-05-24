import "./singlePost.css"
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import format from "date-fns/format";
import {AuthContext} from "../../context/AuthContext";
import {notifySuccess} from "../../utils/ToastNotifications";


export default function SinglePost() {
    const {loggedIn} = useContext(AuthContext);

    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();



    useEffect(() => {
        fetch(`http://localhost:8080/post/${postId}`)
            .then((res) => {
                if (!res.ok) {
                    console.error("No post found with ID: " + postId );
                    navigate("/page-not-found");
                    return;
                }
                return res.json();
            })
            .then((json) => setPost(json));
}, [postId, navigate]);



    const removePost = (postId) => {
        // const confirmed = window.confirm("Are you sure you want to delete this post?");
        //
        // if (!confirmed) return;

        fetch(`http://localhost:8080/posts/${postId}`, {method: 'DELETE'})
            .then((res) => {
                if (!res.ok) {
                    console.error("Something went wrong and couldn't delete post with ID: " + postId );
                    navigate("/page-not-found");
                    return;
                }
                notifySuccess("Post has been deleted!")
                navigate("/");
            })
    };

    if (!post) return false;

    return(

        <>

            <div className="singlePost">

                <div className="singlePostWrapper">

                    <div className="singlePostInfo">
                        <div className="singlePostHeader">
                            <div className="singlePostHeaderOverlay"></div>
                            <div className="singlePostHeaderTitles">
                                <span className="singlePostHeaderTitleLg">{post?.title}</span><br/>
                                <span className="singlePostHeaderTitleSm">{post?.subTitle}</span>
                            </div>
                            <img className="singlePostHeaderImg" src={post?.image}  alt=""/>
                        </div>

                        <div className="singlePostSubHeader">
                            <div className="singlePostCategories">
                                {post.category?.map(cat => (
                                    <span key={cat.id} className="singlePostCategory">{cat.name}</span>
                                ))}
                                <span className="singlePostDate">{format(new Date(post?.timestamp), 'MMMM d, yyyy')}</span>

                            </div>
                                {
                                    loggedIn ? (
                                        <div className="singlePostEdit">
                                            <i onClick={() => navigate(`/edit/${post?.id}`)} className="sidebarSocialIcon fa-solid fa-pen-to-square"></i>
                                            <i onClick={() => removePost(post?.id)} className="sidebarSocialIcon fa-solid fa-trash"></i>
                                        </div>
                                    ) : ( "" )
                                }
                        </div>

                        <div className="singlePostContent">{post?.content}</div>
                    </div>

                </div>
            </div>




        </>

    )
}