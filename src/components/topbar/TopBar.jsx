import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom'
export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-youtube"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">TUTORIAL</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/question">ERROR</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img className='topImg' src="http://cdn.cnn.com/cnnnext/dam/assets/220208141118-03-slovenia-julian-alps-lake-bled.jpg" alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div >
    )
}
