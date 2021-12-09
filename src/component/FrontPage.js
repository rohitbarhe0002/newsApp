import React, { useEffect } from 'react';
import { ModalTitle } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { settitle } from '../actions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Card } from 'antd';

import { requestbytitle, requestnews } from '../thunk/requestFornews';
import { Redirect } from 'react-router';


export default function FrontPage(props) {

    const dispatch = useDispatch();
   
    const headlines = useSelector((state) => state.allnews.news);
    const title = useSelector((state) => state.allnews.title);
    const titledata = useSelector((state) => state.allnews.titleData);
    console.log(headlines);
    console.log(titledata);

    useEffect(() => {
      dispatch(requestnews());
    }, []);

   const handleChange =(event) =>{
   dispatch(settitle(event.target.value));
    }
    const history=useHistory()


   const handleClick = () =>{
  
    // <Redirect to ="/NewsDescription"/>
    dispatch(requestbytitle(title))
    history.push("/description")
  }

    return (
        <div>
            
     <h1 className="heading" >  INDIA LIGHTS</h1>
   

<div class="input-group">
  <div class="form-outline">
  <div className="searchbar">
   <Form className="d-flex">
        <input type="value"placeholder="Search" className="me-2"aria-label="Search"onChange={handleChange}
        />
        <Button variant="outline-primary" onClick={handleClick}>Search</Button>
      </Form>
      </div>

</div> 
</div>
{headlines && 
headlines.map((item,index) => {
    return(
        <card 
        key={index}
        hoverable 
        style = {{width:"100%"}}
        cover ={<img alt ="image" src = {item.urlToimage}/>}>

            <Meta title ={item.title} description ={item.content}/>
            <a href = {item.url} target ="_blank" rel ="noopener npreferrer">
                <Button type ="primary" style ={{marginTop:"10px"}}>
                    Read more
                </Button>
            </a>
            </card>
           

    
)
    })}
    </div>
    )}










 {/* {headlines.map((item) =>(
  <li>{item.articles.map((key) =>(
  <>
  <li>title:<a href={key.url}><br/>{key.title}</a></li>
  <li>Description:<br/>{key.description}</li>

   </>
   ))}</li>
))}; 
  </div>  */}
      
    
    

