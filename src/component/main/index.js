import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  AsyncStorage,
  TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../template/header';
import Tabs from '../../template/tabs';
import Items from '../Items';
import styles from './styles';
import {api} from '../../../env';
import axios from 'axios';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Fulano de talco', emial: '', cpf: '', user_id: '', pendencias: ''};
  }
  
  componentWillMount() {
    this.getToken();
  }
  
  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:ID');
    console.log('Value do id do cabra logado', value)
    
    let data = {
      'user_id': value,
      'filial': 138
    }
    
    console.log('sfsdf', data)
    
    await axios.post(`${api.apiUrl}/users`, data)
      .then((res) => {
        console.log('use data', res.data)
        
        this.setState({pendencias: res.data.data})
        
        console.log('states da parada', this.state)
        
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
    
  }
  
  __renderSpindolas = () => {
      const { pendencias } = this.state;
      console.log('pendendias no timout', pendencias)
      if (pendencias.length !== 0) {
        return (
          pendencias.map(pend => (<Items key={pend.rownum} pendencia={pend}/>))
        );
      }
      return false;
  }
  
  
  
  render() {
    
    return (
      <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <Header />
        <ScrollView >
        
          {this.__renderSpindolas()}
        
        </ScrollView>
        <Tabs />
      </View>
    );
  }
}