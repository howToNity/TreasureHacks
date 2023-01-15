import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { AuthContextProvider } from './context/AuthContext';
import { AvatarPickerProvider } from './context/AvatarPickerContext';

export default function App() {
  return (
    <AuthContextProvider>
      <AvatarPickerProvider>
        <RouterProvider router={router} />
      </AvatarPickerProvider>
    </AuthContextProvider>
  );
}
