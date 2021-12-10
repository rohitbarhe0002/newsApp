import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { settitle } from '../actions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { requestbytitle, requestnews } from '../thunk/requestFornews';



export default function FrontPage(props) {

  const dispatch = useDispatch();
  const history = useHistory()
  const headlines = useSelector((state) => state.allnews.news);
  const title = useSelector((state) => state.allnews.title);
  const titledata = useSelector((state) => state.allnews.titleData);
 



  useEffect(() => {
    dispatch(requestnews());
  }, []);

  const handleChange = (event) => {
    dispatch(settitle(event.target.value));
  }
  const handleClick = () => {
    dispatch(requestbytitle(title))
    history.push("/NewsDescription")
  }

  return (
    <div className="main">
      <div>
        <div className>
        <i className="fas fa-newspaper"></i>
          <h1 className="heading" >  INDIA LIGHTS</h1> <br />
          <div class="input-group">
            <div class="form-outline">

              <div className="searchbar">
                <Form className="d-flex" style={{
                  position: 'absolute', left: '50%', top: '50%',
                  transform: 'translate(-50%, -50%)'
                }} >
                  <input type="value" placeholder="Search" className="me-2" aria-label="Search" onChange={handleChange} /><br /><br />
                  <Button variant="outline-primary" onClick={handleClick}>Search</Button>
                </Form>
              </div>
            </div>

          </div>
        </div>
        {headlines.map((item) => (
          <li>{item.articles.map((key) => (
            <>
              <Container>
                <Card className="bg-dark text-white"><br/>
                  <Card.Img src={key.urlToImage} style={{ width: "95.5%" }} alt="Card image" /><br />
                  <Card.Title>{key.title}</Card.Title>{key.publishedAt} <li>Author=:{key.author}</li> <li>{key.source.name}</li>
                </Card>
              </Container>
              <a  className="btn btn-primary"  href={key.url}>Read more</a><br/>

            </>
          ))}</li>
        ))};
      </div>
    </div>

  )
}















