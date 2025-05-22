import "./write.css"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Write() {

    const navigate = useNavigate();

    const [post, setPost] = useState({});
    const [categories, setCategories] = useState([]);
    const [defaultImage, setImage] = useState("https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740");

    useEffect(() => {
        fetch("http://localhost:8080/categories")
            .then((res) => res.json())
            .then((json) => setCategories(json));
    }, []);

    const publish = () => {
        post.image = defaultImage;
        post.person = {id: 1};
        post.timestamp = new Date().toISOString();
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(json => {
                if (json.id) {
                    alert("Post published!");
                    navigate("/");
                } else {
                    alert("Something went wrong!");
                }
            })
    }

    return (
        <>
            <div className="writePost">

                <div className="writePostWrapper">

                    <div className="writePostInfo">
                        <div className="writePostHeader">
                            <div className="writePostHeaderOverlay"></div>
                            <div className="writePostHeaderTitles">
                                <input onChange={(e) => setPost({...post, title: e.target.value})} type="text" placeholder="Heading..." className="writeInput writeHeading" autoFocus={true}/><br/>
                                <input onChange={(e) => setPost({...post, subTitle: e.target.value})} type="text" placeholder="Subheading..." className="writeInput writeSubHeading"/>
                            </div>
                            <img className="writePostHeaderImg"
                                 src="https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740"
                                 alt=""/>
                        </div>

                        <div className="writePostSubHeader">

                            <div className="writePostCategories">
                                <label className="writeCategory" htmlFor="writeCategory"><i className="writeIcon fa-solid fa-square-plus"></i></label>
                                <select multiple className="writeSelect" id="writeCategory" name="writeCategory"

                                    onChange={(e) => {
                                        const selected = Array.from(e.target.selectedOptions).map(option => ({id: parseInt(option.value)}));
                                        setPost({...post, category: selected});
                                    }}
                                >

                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>

                            </div>
                            <label htmlFor="fileInput" className=""><i className="writeCoverUpload fa-solid fa-upload"></i></label>
                            <div className="writePostEdit">
                                <input style={{display: "none"}} type="file" id="fileInput"/>
                                <button onClick={publish} className="writeSubmit">Publish</button>
                            </div>
                        </div>


                        <div>{JSON.stringify(post)}</div>

                        <div className="writePostContent">
                            <textarea onChange={(e) => setPost({...post, content: e.target.value})}  placeholder="Tell your story..." className="writeInput writeText"></textarea>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}