import { View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import { Home } from './src/screens/Home';


export default function App() {
  const [loaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </>
  );
}
