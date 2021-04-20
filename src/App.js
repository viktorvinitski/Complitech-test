import './App.css';
import MyMap from "./components/MyMap/MyMap";
import Users from "./components/Users/Users"

function App() {
  return (
    <div className="App">
        <h1>ComplITech test task</h1>
        <div className='content'>
            <Users/>
            <MyMap/>
        </div>

    </div>
  );
}

export default App;
