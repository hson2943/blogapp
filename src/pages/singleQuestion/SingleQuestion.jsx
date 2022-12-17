import React from 'react'
import SingleQuestionPost from '../../components/singleQuestionPost/SingleQuestionPost'
import Sidebar from '../../components/sidebar/Sidebar'
import "./singleQuestion.css"
export default function SingleQuestion() {
    return (
        <div className='singleQuestion'>
            <SingleQuestionPost />
            <Sidebar />
        </div>
    )
}
