import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { globalStyle } from './assets/styles';

export default function App() {
  return (
    <View style={globalStyle.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
