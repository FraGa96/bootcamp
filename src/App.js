import Counter from './components/counter/CounterWithHooks';
import './App.css';

function App() {
  const sayHello = () => {
    console.log("HELLOO!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter maxValue={15} sayHi={sayHello}>
          <span>Hey you!</span>
        </Counter>
      </header>
    </div>
  );
}

export default App;
