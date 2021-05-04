import Counter from './components/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter maxValue={15}/>
      </header>
    </div>
  );
}

export default App;
