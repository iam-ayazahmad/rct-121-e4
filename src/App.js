
import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Companies } from './pages/Companies';
import { Employee } from './pages/Employee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/company' element={<Companies/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
