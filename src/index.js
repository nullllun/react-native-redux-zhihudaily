import React from 'react';
import Expo from 'expo';
import './pages/HomePage';
import Router from './Router';
import {
  NavigationProvider
} from '@expo/ex-navigation';
import DrawerNavigationLayout from './components/DrawerNavigationLayout';

class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <NavigationProvider router={Router}>
        <DrawerNavigationLayout initialItem="home"/>
      </NavigationProvider>
    );
  }
}

export default App;
