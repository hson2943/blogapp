import React from 'react'
import './home.css'
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import QuestionPosts from '../../components/questionPosts/QuestionPosts'
export default function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <Posts />
                <Sidebar />
            </div>
        </>

    )
}
