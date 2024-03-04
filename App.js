import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from "twrnc";
import "react-native-gesture-handler";
import { AuthProvider } from './auth/AuthContext';
import { Routes } from './routes/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
