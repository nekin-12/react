import logo from './logo.svg';
import './App.css';
// import helloWorld  from './helloWorld';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function testProps(){
  return (
    <div className='testProps'>
      <helloWorld>test</helloWorld>
    </div>
  );


}

export default App;
