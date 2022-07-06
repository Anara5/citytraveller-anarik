import './App.css';
import CityTravel from './components/CityTravel';

function App() {
  return (
    <div className='App'>
      <div className="cityTravel">
        <h1>City Travel</h1>
      </div>
      <div id='earth'>
        <CityTravel />
      </div>
    </div>
  );
}

export default App;
