import React from 'react'
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
export default function Description() {
    const headlines = useSelector((state) => state.allnews.news);
    const handleChange = (bookmark) =>{
        

    }
    return (

        <div>
            <h1>hello</h1>

            {headlines.map((item) => (
                <li>{item.articles.map((key) => (
                    <div className="">
                    <>
                        {/* <li>title:<a href={key.url}><br /></a></li> */}
                        <li>Description:<br />{key.description}</li> <input type='checkbox' onChange={handleChange(key.decription)}></input>
                       <li><Image src={key.urlToImage} fluid /></li>
                        
                        

                    </>
                    </div>
                ))}</li>
            ))};
        </div>

    )
}
