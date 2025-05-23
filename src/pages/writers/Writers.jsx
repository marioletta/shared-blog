import "./writers.css"
import {useEffect, useState} from "react";

export default function Writers() {

    const [writers, setWriters] = useState([])
    const [page, setPage] = useState(0)


    useEffect(() => {
        //fetch("http://localhost:8080/public-products-pageable?page=" + page + "&size=2")
        fetch(`http://localhost:8080/public-users?page=${page}`)
            .then(res => res.json())
            .then(json => setWriters(json.content))
    }, [page]);


    return (
        <>
            <div className="writers">
                        {writers.map(writer => (
                            <div className="writer" key={writer.id}>
                                <i className="writerProfileImg fa-regular fa-circle-user"></i><br/>
                                <div className="writerName">{writer.name}</div><br/>
                                <div className="writerEmail"><i className="fa-solid fa-envelope"></i> {writer.email}</div>
                            </div>
                        ))}




            </div>
        </>
    );
}