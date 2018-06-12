import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../template/header';
import Tabs from '../../template/tabs';
import Items from '../Items';
import styles from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Fulano de talco', emial: '', cpf: '', user_id: '' };
  }
  
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <Header />
        <ScrollView >
          <Items />
        </ScrollView>
        <Tabs />
      </View>
    );
  }
}