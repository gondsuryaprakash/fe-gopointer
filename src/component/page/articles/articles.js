import React from "react";
import './../../page/articles/articles.css'


export default function ArticlesPage(props) {
    const a = '<p>Keep in mind that this is just one implementation you can build your own VPN protocol to achieve the same result.<p>'
    return <div className="articleContainer">
        <div>

            <h2 className="articleHeader">Header</h2>
            <div className='articleContent' dangerouslySetInnerHTML={{__html:a}}></div>
        </div>
    </div>
} 