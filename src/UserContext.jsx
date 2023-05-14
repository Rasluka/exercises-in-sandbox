import {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import userService from './pages/users/userService';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function CurrentUserContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const getSessionToken = () => JSON.parse(localStorage.getItem('usertoken'));
  const navigate = useNavigate();

  const getCurrentUser = useCallback(async () => {
    try {
      const { token, id } = getSessionToken();

      if (!token) {
        throw new Error('Token not found');
      }

      const res = await userService.getCurrentUser(token, id);

      if (!res) {
        throw new Error('Could not fetch testRequest');
      }

      setCurrentUser(res.data);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}

export default CurrentUserContext;
