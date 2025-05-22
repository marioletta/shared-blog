import "./posts.css";
import Post from "./post/Post";
import {useEffect, useState} from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/public-posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => {
                console.error("Failed to fetch posts:", err);
            });
    }, []);


    return (
        <div className="posts">
            {posts.length > 0 ? (
                posts.map(post => <Post key={post.id} post={post} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
}