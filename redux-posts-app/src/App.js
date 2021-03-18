import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter } from 'react-router-dom';
import CreatePost from './pages/CreatePost/CreatePost';
import UpdatePost from './pages/UpdatePost/UpdatePost';
import Counter from './pages/Counter/Counter';
import Counterfn from './pages/Counter/Counterfn';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <div className='container'>
                    <Switch>
                        <Route path='/posts' component={Posts} />
                        <Route path='/counter' component={Counterfn} />
                        <Route path='/createpost' component={CreatePost} />
                        <Route
                            path='/updatepost/:id'
                            component={UpdatePost}
                        />
                        <Route path='/' component={Home} exact />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
