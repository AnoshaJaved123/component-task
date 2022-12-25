import Counter from './Counter'
import './App.css';
import Multiplier from './components/Multiplier';
import Subtraction from './components/Subtraction';
import Division from './components/Division';

function App() {
  return (
    <div className="container">
    <div>Counter</div>
      <Counter/>
      <Multiplier/>
      <Subtraction/>
      <Division/>
    </div>
    );
}

export default App;
