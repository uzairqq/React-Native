import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import UzairComponent from './src/screens/UzairComponent';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Seconds:UzairComponent
  },
  {
    initialRouteName: 'Seconds',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
