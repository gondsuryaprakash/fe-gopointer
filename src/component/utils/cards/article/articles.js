import React from "react";

import './../article/article.css'
import profile from './../../../../static/profile.jpg'
import {useNavigate} from 'react-router-dom'


export default function Articles(props) {
    const navigator = useNavigate()
    const handleClick =(id)=>{  
        navigator(`/article/${id}`)
    }
    const { id, article: {body, header}, author:{name: authorName}, date} = props.content
    return (
    <div className="articleContainer" onClick={()=>{handleClick(id)}}>
            <div className="contentContainer">
            <div className="post-header">
                <div className="author-profile">
                     <img src={profile}></img>
                </div>
                <div className="author-name">
                    <span>{authorName}</span>
                </div>
                <div className="post-date">
                    <span>{date}</span>
                </div>         
            </div>
            <div className="post-heading">
                <h2>{header} </h2>
                </div>
            <div className="post-body">
                <p>{body}</p></div>
            </div>
            <div className="imageContainer">
                  <img src={profile}></img> 
            </div>
           
            </div>
    )
}