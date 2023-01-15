import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useUser() {
  const user = useContext(AuthContext)

  return {
    user
  }
}
