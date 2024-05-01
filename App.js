import { StyleSheet, View, Text} from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Navigator from './src/navigation/Navigator';
import Header from './src/components/Header'
import PostList from './src/screens/PostList';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'RobotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
    'RobotoThin': require('./assets/fonts/Roboto-Thin.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  
  return (
    <View>
      <Navigator/>
    </View>
  );
}

