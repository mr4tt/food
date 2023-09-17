import FirstScreen from './screens/FirstScreen'; 
import SecondScreen from './screens/SecondScreen';
import CalendarScreen from './screens/CalendarScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}> 
        <Stack.Screen  name="FirstScreen" component={FirstScreen} />
        <Stack.Screen  name="SecondScreen" component={SecondScreen} />
        <Stack.Screen  name="CalendarScreen" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
