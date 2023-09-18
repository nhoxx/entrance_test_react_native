import { ActivityIndicator, View } from 'react-native';
import { AppNavigator } from './src/navigation/NavigationStack';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/stores';
import { Colors } from './src/utils/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
    'Lato-Medium': require('./src/assets/fonts/Lato-Medium.ttf'),
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Semibold': require('./src/assets/fonts/Lato-Semibold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    </Provider>
  );
}
