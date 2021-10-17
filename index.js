/**
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import {Provider} from 'react-redux';
import {LogBox, AppRegistry, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

import {name as appName} from './app.json';
import store from './src/redux/store';


LogBox.ignoreAllLogs();

// Navigation
import Navigation from './src/navigation';


const App = () => {

  const requestIosPermission = async () => {
    const result = await messaging().hasPermission();

    if(result !== messaging.AuthorizationStatus.AUTHORIZED){
      await messaging().requestPermission();
    }
  }

    
  useEffect(() => {
    if(Platform.OS === 'ios'){
      requestIosPermission();
    }
  },[])

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
