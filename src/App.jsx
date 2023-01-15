import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
