import './App.css';
import Login from './component/admin/login';
import './component/admin/login.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/home/home';
import Articles from './component/utils/cards/article/articles';
import ArticlesPage from './component/page/articles/articles';
import About from './component/page/about/about';

function App() { 
       return (<div className="App">
        <Router>
        <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route exact path='/adminlogin' element={<Login></Login>}></Route>
                <Route exact path='/article/:id' element={<ArticlesPage></ArticlesPage>}></Route>
                <Route exact path='/aboutus' element={<About></About>}></Route>
                
                
        </Routes>
        </Router>
       
        </div>)
}

export default App;
