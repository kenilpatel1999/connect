import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
