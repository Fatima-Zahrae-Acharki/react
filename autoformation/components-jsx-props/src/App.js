import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {/* <Greet/> */}
      <Greet name="aatrox" role="drake">
        <p>children props</p>
      </Greet>
      <Greet name="zed" role="assassin">
        <button>go</button>
      </Greet>
      <Greet name="yuumi" role="sorcerer" />

      <Welcome name="aatrox" role="drake"></Welcome>
      <Welcome name="zed" role="assassin" ></Welcome>
      <Welcome name="yuumi" role="sorcerer" ></Welcome>
      <Hello/>
    </div>
  );
}

export default App;
