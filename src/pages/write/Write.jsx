import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="http://cdn.cnn.com/cnnnext/dam/assets/220208141118-03-slovenia-julian-alps-lake-bled.jpg" alt="" />
            <form className="writeForm" action="">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Tiltle" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">


                    </textarea>

                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
