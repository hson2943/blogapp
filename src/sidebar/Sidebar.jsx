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
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Life1</li>
                    <li className='sidebarListItem'>Life2</li>
                    <li className='sidebarListItem'>Life3</li>
                    <li className='sidebarListItem'>Life4</li>
                    <li className='sidebarListItem'>Life5</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                </div>
            </div>

        </div>
    );
}
