import React from 'react'
import Articles from '../utils/cards/article/articles'
import './../home/home.css'
export default function Home(props) {
    let artilces = [
    {   id:1,
        author: {
            id:1, 
            name:"Surya",
            authorprofile:"profileurl.jpg"
        },
        article:{
            header:"How VPNs really work", 
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        date: "04 Oct 2023"
    },
    {   id:2,
        author: {
            id:1, 
            name:"Surya",
            authorprofile:"profileurl.jpg"
        },
        article:{
            header:"Article 1 Hai Bahut Bada kya kiya jaye Bataiye", 
            body: "Some Body"
        },
        date: "04 Oct 2023"
    },
    {   id:3,
        author: {
            id:1, 
            name:"Surya",
            authorprofile:"profileurl.jpg"
        },
        article:{
            header:"Article 1 Hai Bahut Bada kya kiya jaye Bataiye", 
            body: "Some Body"
        },
        date: "04 Oct 2023"
    },    
]

    return (
        <div className='home'>
{artilces.map((val,index)=>{
                return <><Articles  key={index} content={val}></Articles>
                        <hr className='hrCustom'></hr>
                </>
            })}
        </div>
            
        
    )
}