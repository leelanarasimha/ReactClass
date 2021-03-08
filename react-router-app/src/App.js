import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Posts from './pages/Posts/Posts';
import Header from './components/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className='container'>
                <Route path='/' component={Home} exact />
                <Route path='/contact' component={Contact} />
                <Route path='/posts' component={Posts} />
            </div>
        </BrowserRouter>
    );
}

export default App;
