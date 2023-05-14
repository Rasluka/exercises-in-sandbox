import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
