import "./posts.css";
import Post from "./post/Post";
import {useEffect, useState} from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8080/public-posts?page=${page}&size=6&sort=timestamp,desc`)
            .then(res => res.json())
            .then(json => setPosts(json.content))
            .catch(err => {
                console.error("Failed to fetch posts:", err);
            });
    }, [page]);

    return (
        <div className="postsContainer">
            <div className="postsControls">
                <div className="searchContainer">
                    <i className="seachIcon fa-solid fa-magnifying-glass"></i>
                    <input className="searchBox" type="text"/>
                </div>
                <button className="postsPageSwitcher" disabled={page === 0} onClick={() => setPage(page - 1)}><i
                    className="fa-solid fa-chevron-left"></i></button>
                <span className="currentPage">{page + 1}</span>
                <button className="postsPageSwitcher" onClick={() => setPage(page + 1)}><i
                    className="fa-solid fa-chevron-right"></i></button>
            </div>
            <div className="posts">
                {posts.length > 0 ? (
                    posts.map(post => <Post key={post.id} post={post}/>)
                ) : (
                    <p>No posts available.</p>
                )}

            </div>
        </div>
    );
}