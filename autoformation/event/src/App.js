import './App.css';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <br></br>
      <ClassClick />
      <br></br>
      <EventBind />
    </div>
  );
}

export default App;
