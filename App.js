import React from 'react';
import Routes from './src/Routes';
import { AsyncStorage } from 'react-native';
import OneSignal from "react-native-onesignal";

export default class App extends React.Component {
  
  componentDidMount(){
    OneSignal.addEventListener('opened', this.onOpened);
  }
  
  componentWillMount(){
    OneSignal.removeEventListener('opened', this.onOpened)
    let xpto = OneSignal.addEventListener('ids', this.onIds)
  }
  
  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds);
  }
  
  onOpened({ notification }){
    console.log('notificacao', notification)
  }
  
  onIds(device) {
    AsyncStorage.setItem('@MySuperStore:player_id', device.userId);
  }
  
  render() {
    return(
      <Routes />
    )
  }
}