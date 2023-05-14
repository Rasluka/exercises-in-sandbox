import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';
import Faqs from './pages/Faqs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/faqs" element={<Faqs />} />
    </Routes>
  );
}

export default App;
