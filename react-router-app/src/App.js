import './App.css';
import {
    BrowserRouter,
    HashRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Posts from './pages/Posts/Posts';
import Header from './components/Header/Header';
import CreatePost from './pages/CreatePost/CreatePost';
import UpdatePost from './pages/UpdatePost/UpdatePost';
import { Users } from './pages/Users/Users';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className='container'>
                <Switch>
                    <Route path='/posts' component={Posts} />
                    <Route path='/createpost' component={CreatePost} />
                    <Route path='/updatepost/:id' component={UpdatePost} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/users' component={Users} />
                    <Route path='/' component={Home} exact />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
