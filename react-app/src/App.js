import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Counter from './components/Counter/Counter';

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
