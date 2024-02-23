import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';

import tw from 'twrnc';
import Routes from './routes/routes';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Routes />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
