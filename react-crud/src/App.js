import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <div className='container'>
                <Posts />
            </div>
            <Footer />
        </div>
    );
}

export default App;
