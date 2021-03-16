import './App.css';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <div>
                    <Switch>
                        <Route path='/posts' component={Posts} />
                        <Route path='/' component={Home} exact />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
