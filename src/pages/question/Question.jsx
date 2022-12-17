import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import QuestionPosts from '../../components/questionPosts/QuestionPosts'
import Header from '../../components/header/Header'
import "./question.css"
export default function Question() {
    return (
        <>
            <Header />
            <div className='question'>
                <QuestionPosts />
                <Sidebar />
            </div>
        </>

    )
}
