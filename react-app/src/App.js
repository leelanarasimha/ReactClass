import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Counter from './components/Counter/Counter';
import ShowName from './components/ShowName/ShowName';
import CounterFunctions from './components/Counter/CounterFunctions';
import PropsComponent from './components/PropsComponent/PropsComponent';
import Addition from './components/PropsComponent/Addition';
import AdditionClass from './components/PropsComponent/AdditionClass';
import Products from './components/Products/Products';
import ProductsClass from './components/Products/ProductsClass';
import LoginClass from './components/Login/LoginClass';

function App() {
    return (
        <div>
            {/* <div>List Of students in React Class</div> */}

            <div>
                {/* <PropsComponent name='Dinesh' age='20' />
                <PropsComponent name='Priyatam' age='20' />
                <PropsComponent name='Leela' age='30' />
                <Addition a='3' b='4' />
                <Addition a='100' b='200' />
                <Addition a='400' b='500' />
                <AdditionClass a='400' b='500' /> */}

                <LoginClass />
            </div>
        </div>
    );
}

export default App;
