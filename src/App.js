import logo from './logo.svg';
import './App.css';
import NewsDescription from './component/NewsDescription';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './component/FrontPage';

function App() {
  <Router>
    {/* <Link to = "/NewsDescription" ></Link> */}
    {/* <Route exact path="/FrontPage">
      <FrontPage />
      </Route> */}


  
    <Route path="/description" component ={NewsDescription}/>
  </Router>
  return (
    <div className="App">
      <FrontPage/>
    </div>
  );
}

export default App;
