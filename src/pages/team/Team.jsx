import "./team.css"
import {useEffect, useState} from "react";

export default function Team() {

    const [writers, setWriters] = useState([])
    const [page, setPage] = useState(0)


    useEffect(() => {
        fetch(`http://localhost:8080/public-users?page=${page}&sort=name,asc`)
            .then(res => res.json())
            .then(json => setWriters(json.content))
    }, [page]);


    return (
        <>
            <div className="writers">
                {writers.map(writer => (
                    <div className="writer" key={writer.id}>
                        <img src={`/assets/profilePics/${writer.profilePicture}.png`} alt="" className="writerProfileImg"/>
                        <div className="writerName">{writer.name}</div>
                        <br/>
                    </div>
                ))}
            </div>
        </>
    );
}