
import { useHistory } from 'react-router-dom';

const useLogout = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return logout;
};

export default useLogout;
