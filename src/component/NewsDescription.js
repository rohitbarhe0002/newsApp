import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
export default function NewsDescription() {
    const titledata = useSelector((state) => state.allnews.titleData);
    return (
        <div>
          {titledata.map((item) =>(
  <li>{item.articles.map((key) =>(
  <><li>title={key.title}</li>
  <li> url={key.url}</li>
   </>
   ))}</li>
))};
        
        </div>
    )
}
