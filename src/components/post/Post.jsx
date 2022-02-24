import "./post.css"

export default function Post({ img }) {
    return (
        <div className="post">
            <img className="postImg" src="http://cdn.cnn.com/cnnnext/dam/assets/220208141118-03-slovenia-julian-alps-lake-bled.jpg" alt="" />
            <div className="postInfo">
                <div className="postCasts">
                    <span className="postCast">Music</span>
                    <span className="postCast">Life</span>
                </div>
                <span className="postTitle">Lorum asdfsd afsdfsdf adsfsdfsd asdfsdfsdf</span>
                <hr />
                <span className="postDate">1 h ago</span>
            </div>
            <p className="postDesc">
                This was my first dance music at my wedding! I love this song! When my wife and I hear it, we could anywhere; mall/store, gas station, pharmacy...we always dance to it. I was curious how someone
            </p>
        </div>
    );
}