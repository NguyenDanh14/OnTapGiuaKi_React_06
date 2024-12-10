import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenLogin from './Screens/ScreenLogin';
import ScreenElectronics from './Screens/ScreenElectronics';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScreenElectronics' screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
        <Stack.Screen name="ScreenElectronics" component={ScreenElectronics} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}