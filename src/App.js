import logo from './logo.svg';
import './App.css';
import NewsDescription from './component/NewsDescription';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from './component/FrontPage';
import Description from './component/Description';

function App() {
 
  return (
    <div className="App">
    
      <Router>
    
    {/* <Route exact path="/FrontPage">
      <FrontPage />
      </Route> */}

    <Link to="/FrontPage">news</Link>
    <Route exact path="/FrontPage" component={FrontPage} />
    <Route path="/NewsDescription" component={NewsDescription} />
    <Route path="/title" component={Description} />
  </Router>
    </div>
  );
}

export default App;