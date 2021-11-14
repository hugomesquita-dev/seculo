/**
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import {Provider} from 'react-redux';
import {LogBox, AppRegistry, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';

import {name as appName} from './app.json';
import store from './src/redux/store';

//import { notificationListener, requestUserPermission } from './src/helper/notificationServices';


LogBox.ignoreAllLogs();

// Navigation
import Navigation from './src/navigation';
import { notificationListener } from './src/helper/notificationServices';


const App = () => {

  // useEffect(() => {
  //   requestUserPermission()
  //   notificationListener()
  // },[]);

  const requestIosPermission = async () => {
    const result = await messaging().hasPermission();

    if(result !== messaging.AuthorizationStatus.AUTHORIZED || result !== messaging.AuthorizationStatus.PROVISIONAL){
      await messaging().requestPermission();
    }
  }

  const handleMessagingToken = token => {
    console.log('handleMessagingToken', token);
  }

  //notificações locais com o app aberto
  /*const displayForegroundNotification = async  message =>{
    try{
      const {data} = messsage;

      const notificationToDisplay = new notifications.Notification()
      .setTitle(data.title)
      .setBody(data.body)
      setData(data)
      .android.setChannelId('default')
      .android.setAutoCancel(true);

      return notifications().displayNotification(notificationToDisplay);

    }catch(ex){
      console.warn(ex)
    }

    return Promise.resolve();
  }*/
  const channelId = notifee.createChannel({
    id: 'default',
    name: 'Padrão'
  })

  const handledMessageReceived = async message => {
    console.log('handleMessageReceived', message);
    console.log('handleMessageReceived', message.notification.body);
    //displayForegroundNotification(message);
    //notifee.displayNotification(message.data.notifee)


    await notifee.displayNotification({
      /*title: message.notification.title,
      body: message.notification.body,*/
      ...message.notification,
      // android: {
      //   channelId,
      // },
    });


  }

  //click
  const handleNotificationOpenedApp = message => {
    console.log('handleNotificationOpenedApp', message);
  }

  //click com app fechado
  const handleInitialNotification = async () => {
    const notification = await messaging().getInitialNotification();
    console.log('handleInitialNotification', notification);
  }

  //modificação retorna a notificação quando o app estiver fechadado
  /*const handleInitialNotification = async () => {
    const initialNotificationEvent = 
    await notifications().getInitialNotification();
    console.log('handleInitialNotification', initialNotificationEvent?.notification);
  }*/

  

  /*const createAdroindNotificationChannels = async () => {
    const group = new notifications.Android.ChannelGroup('default','Padrão');
    await notifications().android.createAdroindNotificationChannels(group);

    const channelDefault = new notifications.Android.Channel(
      'default',
      'Padrão',
      notifications.Android.Importance.Default,
    )
    .setDescription('Padrão')
    .enableVibration(true)
    .setBypassDnd(true)
    .enableLights(true)
    .setSound('default')
    .setGroup(group.groupId);

    await notifications().android.createChannels([channelDefault]);
  } */

  useEffect(() => {
    /*if(Platform.OS === 'android'){
      createAdroindNotificationChannels();
    }*/

    if(Platform.OS === 'ios'){
      requestIosPermission();
    }
   
    //exibe a notificação com o app fechado
    handleInitialNotification();
    messaging().getToken().then(handleMessagingToken);

    const removeOnTokenRefresh = messaging().onTokenRefresh(handleMessagingToken);
    const removeOnMessage = messaging().onMessage(handledMessageReceived);
    
    /*const removeOnMessage = messaging().onMessage(message => {
      const notification = message
      if (notification) {
        notifee.displayNotification({
          ...message,
          ...notification,
          android: { channelId},
        })
      }
      
    })*/


    //modificação no clique da notificação abertas no primeiro e segundo plano
    const removeNotificationOpenedApp = messaging().onNotificationOpenedApp(
      handleNotificationOpenedApp,
    );
    

    return () => {
      removeOnTokenRefresh(); 
      removeOnMessage();
      removeNotificationOpenedApp();
    }
    
  },[])

  /*notifee.onBackgroundEvent(async localMessage => {
    console.log('notifee setBackgroundMessageHandler localMessage', localMessage)
  })*/

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
