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
    this.state = { name: 'Fulano de talco', emial: '', cpf: '', user_id: '', pendencias: '', player_id: ''};
  }
  
  componentWillMount() {
    this.getToken();
  }
  
  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:ID');
    
    const player_id = await AsyncStorage.getItem('@MySuperStore:player_id');
    this.setState({player_id: player_id})
    
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
        this.__updatePlayerid();
        
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
  
  __updatePlayerid(){
    let dt = {
      player_id: this.state.player_id,
      user_id: this.state.user_id
    }
    axios.put(`${api.apiUrl}/set_playerid`, dt)
      .then( res => console.log('Dados atualizados com sucesso', res))
      .catch(error => console.log('Erro ao atualizar os dados do player', error))
  }
  
  
  render() {
    
    return (
      <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
        <Header />
        <ScrollView >
        
          {this.__renderSpindolas()}
        
        </ScrollView>
        
      </View>
    );
  }
}