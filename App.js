import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ExcerciseScreen from './src/screens/ExcerciseScreen';
import ListScreen from './src/screens/ListScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageScreen from './src/screens/ImageScreen';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Excercise:ExcerciseScreen,
    List:ListScreen,
    FlatList:FlatListScreen,
    Image:ImageScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
