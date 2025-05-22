import "./edit.css"
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";


export default function Edit() {

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


    if (!post) return false;


    return (
        <>
            <div className="editPost">

                <div className="editPostWrapper">

                    <div className="editPostInfo">
                        <div className="editPostHeader">
                            <div className="editPostHeaderOverlay"></div>
                            <div className="editPostHeaderTitles">
                                <input type="text" placeholder="Heading..." className="editInput editHeading" defaultValue={post?.title} autoFocus={true}/><br/>
                                <input type="text" placeholder="Subheading..." className="editInput editSubHeading" defaultValue={post?.subTitle}/>
                            </div>
                            <img className="editPostHeaderImg"
                                 src="https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740"
                                 alt=""/>
                        </div>

                        <div className="editPostSubHeader">

                            <div className="editPostCategories">
                                <label className="editCategory" htmlFor="editCategory"><i className="editIcon fa-solid fa-square-plus"></i></label>
                                <select className="editSelect" id="editCategory" name="editCategory">
                                    <option value="">Select Category</option>
                                    <option value="Vegetable Gardening">Vegetable Gardening</option>
                                    <option value="Fruit Gardening">Fruit Gardening</option>
                                    <option value="Soil & Composting">Soil & Composting</option>
                                    <option value="Pests & Diseases">Pests & Diseases</option>
                                </select>
                                {post.category?.map(cat => (
                                    <span key={cat.id} className="singlePostCategory">{cat.name}</span>
                                ))}
                            </div>
                            <label htmlFor="fileInput" className=""><i className="editCoverUpload fa-solid fa-upload"></i></label>
                            <div className="editPostEdit">
                                <input style={{display: "none"}} type="file" id="fileInput"/>
                                <button className="editSubmit">Save changes</button>
                            </div>
                        </div>


                        <div className="editPostContent">
                            <textarea placeholder="Tell your story..." className="editInput editText" defaultValue={post?.content}></textarea>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}