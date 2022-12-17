import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img className='sidebarImg' src="https://img.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg?size=626&ext=jpg" alt="" />
                <p>
                    Hello everyone !. I'm BALABA a guy have a dream to become a dev game. I craete this website to start my journey to make my dream come true.
                    What i'm gonna do on this web is update what i learn throught process, making tutorial what i learned and write diary what i learn beside
                    making game.May be these thing can help you maybe just a little. Hope you guys have great day!!!.
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>TURORIAL</li>
                    <li className='sidebarListItem'>ERROR</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    );
}
