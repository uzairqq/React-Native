import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ExcerciseScreen from './src/screens/ExcerciseScreen';
import ListScreen from './src/screens/ListScreen';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Excercise:ExcerciseScreen,
    List:ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
