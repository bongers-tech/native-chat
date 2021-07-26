import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';
import Toggle from './component/Toggle';

function App(args) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome, {args.name}
                </p>
                <Clock/>
                <Toggle/>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
