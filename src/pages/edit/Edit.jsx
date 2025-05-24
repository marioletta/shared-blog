import "./edit.css"
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {notifyFail, notifySuccess} from "../../utils/ToastNotifications";


export default function Edit() {

    const navigate = useNavigate();

    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [categories, setCategories] = useState([]);
    const [defaultImage, setImage] = useState("https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740");

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((res) => res.json())
            .then((json) => setCategories(json));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/post/${postId}`)
            .then((res) => {
                if (!res.ok) {
                    navigate("/page-not-found");
                    return;
                }
                return res.json();
            })
            .then((json) => setPost(json));
    }, [postId, navigate]);

    const update = () => {
        post.id = postId;
        post.image = defaultImage;
        post.person = {id : sessionStorage.getItem("token")};
        fetch("http://localhost:8080/posts", {
            method: "PUT",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(json => {
                if (json.id) {
                    notifySuccess("Post updated!")
                    navigate("/post/" + postId);
                } else {
                    notifyFail(json.message || "Something went wrong!");
                }
            })
    }


    if (!post) return false;


    return (
        <>
            <div className="editPost">

                <div className="editPostWrapper">

                    <div className="editPostInfo">
                        <div className="editPostHeader">
                            <div className="editPostHeaderOverlay"></div>
                            <div className="editPostHeaderTitles">
                                <input onChange={(e) => setPost({...post, title: e.target.value})}  type="text" placeholder="Heading..." className="editInput editHeading" defaultValue={post?.title} autoFocus={true}/><br/>
                                <input onChange={(e) => setPost({...post, subTitle: e.target.value})} type="text" placeholder="Subheading..." className="editInput editSubHeading" defaultValue={post?.subTitle}/>
                            </div>
                            <img className="editPostHeaderImg"
                                 src={post.image}
                                 alt=""/>
                        </div>

                        <div className="editPostSubHeader">

                            <div className="editPostCategories">
                                <label className="editCategory" htmlFor="editCategory"><i className="editIcon fa-solid fa-square-plus"></i></label>
                                <select multiple className="editSelect" id="editCategory" name="editCategory"

                                        onChange={(e) => {
                                            const selected = Array.from(e.target.selectedOptions).map(option => ({id: parseInt(option.value)}));
                                            setPost({...post, category: selected});
                                        }}
                                >

                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>

                                {post.category?.map(cat => (
                                    <span key={cat.id} className="singlePostCategory">{cat.name}</span>
                                ))}
                            </div>
                            <label htmlFor="fileInput" className=""><i className="editCoverUpload fa-solid fa-upload"></i></label>
                            <div className="editPostEdit">
                                <input style={{display: "none"}} type="file" id="fileInput"/>
                                <button onClick={update} className="editSubmit">Save changes</button>
                            </div>
                        </div>


                        <div className="editPostContent">
                            <textarea onChange={(e) => setPost({...post, content: e.target.value})} placeholder="Tell your story..." className="editInput editText" defaultValue={post?.content}></textarea>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}