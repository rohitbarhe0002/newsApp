import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { Container, ModalTitle } from 'react-bootstrap';
import { useHistory } from 'react-router';
export default function NewsDescription() {
    const titledata = useSelector((state) => state.allnews.titleData);
    const title = useSelector((state) => state.allnews.title);
    const history =useHistory()

    const handleClick= (e)=>{
        e.preventDefault();
        history.push("/title")
    }


    return (<>
        <h1>{title}Headlines</h1>
        <div>
            {titledata.map((item) => (
                <li>{item.articles.map((key) => (
                    <>
                        <div className="main">
                            <Container>
                                <Card className="bg-dark text-white"><br />
                                    <Card.Img src={key.urlToImage} style={{ width: "95.5%" }} alt="Card image" /><br />
                                    <Card.ImgOverlay>
                                    </Card.ImgOverlay>
                                    <Card.Title>{key.title}</Card.Title>{key.publishedAt}
                                </Card>
                            </Container>
                           < button onClick={handleClick}><a className="btn btn-primary" href={key.url}>Read more</a></button><br />
                        </div>
                    </>

                ))}</li>
            ))};

        </div>
    </>
    )
}
