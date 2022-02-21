import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://img.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg?size=626&ext=jpg" alt="" />
                <p>
                    hello everyone my name BALABA hello everyone my name BALABA hello everyone my name BALABA hello everyone my name BALABA hello everyone my name BALABA hello everyone my name BALABA hello everyone my name BALABA hello everyone my name BALABA
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>My projects</li>
                    <li className='sidebarListItem'>Tutorials</li>
                    <li className='sidebarListItem'>My Journey</li>
                    <li className='sidebarListItem'>Reivews</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-youtube"></i>
                </div>
            </div>

        </div>
    );
}
