import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ExcerciseScreen from './src/screens/ExcerciseScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Excercise:ExcerciseScreen
  },
  {
    initialRouteName: 'Excercise',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
