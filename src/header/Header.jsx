import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src="http://cdn.cnn.com/cnnnext/dam/assets/220208141118-03-slovenia-julian-alps-lake-bled.jpg" alt="" />
        </div>
    )
}
