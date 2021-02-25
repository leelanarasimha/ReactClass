import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Counter from './components/Counter/Counter';
import ShowName from './components/ShowName/ShowName';

function App() {
    return (
        <div>
            <Welcome />

            <Autocomplete />

            <Counter />
        </div>
    );
}

export default App;
