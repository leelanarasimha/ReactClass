import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />

                <div className='container'>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route
                            path='/'
                            render={() => <div>Home Page</div>}
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
