import './App.css';
import BicycleForm from './BicycleForm'
import Dexie from 'dexie'

function App() {
  return (
    <div className="App">
      <BicycleForm db={new Dexie('WeightShavingDreamAppDB')}/>
    </div>
  );
}

export default App;
