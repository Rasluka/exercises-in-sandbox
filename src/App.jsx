import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './pages/users/SignIn';
import CurrentUserContext from './UserContext';
import Faqs from './pages/Faqs';

function App() {
  return (
    <CurrentUserContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </CurrentUserContext>
  );
}

export default App;
