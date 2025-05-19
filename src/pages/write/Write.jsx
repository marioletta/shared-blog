import "./write.css"

export default function Write() {
    return(
        <>
            <div className="write">
                <form action="" className="writeForm">
                    <img className="writeImg" src="https://img.freepik.com/free-vector/new-normal-hobby-doodle-vector-with-plant-parent_53876-140948.jpg?ga=GA1.1.2017358606.1747576772&semt=ais_hybrid&w=740" alt=""/>
                    <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-square-plus"></i></label>
                    <input style={{display : "none"}} type="file" id="fileInput"/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                </form>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText"></textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </div>
        </>

    )
}