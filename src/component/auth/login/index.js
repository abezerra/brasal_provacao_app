'use strict';

import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import Toast, {DURATION} from 'react-native-easy-toast';
import styles from './styles';

const logo = require('../../../../assets/img/logo/logo_brasal.png')
const bg = require('../../../../assets/img/bg/login/splash.jpg');
import {api} from '../../../../env';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.auth = this.auth.bind(this);
    this.__renderToaster = this.__renderToaster.bind(this);
  }
  
  __renderToaster = () => (
    <View style={styles.toasterContainer}>
      <Text style={styles.toasterText}>Usuario ou senha invalida</Text>
    </View>
  )
  
  async auth() {
    await axios.post(`${api.apiUrl}/login`, {
      user: this.state.email,
      password: this.state.password,
    }).then((res) => {
      console.log('res data', res.data)
        if (res.data >= 1) {
          AsyncStorage.setItem('@MySuperStore:ID', this.state.email);
          Actions.main();
        }
      })
      .catch((err) => {
        this.refs.toast.show('Usuario ou senha invalidos', 3200);
      });
  }
  
  render() {
    return (
      <ImageBackground source={bg} style={styles.bg}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.loginCotainer}>
          
          <View style={styles.logo}>
            <Image source={logo} style={styles.logoImage}/>
          </View>
          <Toast
            ref="toast"
            style={{backgroundColor: 'red'}}
            position='top'
            positionValue={200}
            fadeOutDuration={2000}
            textStyle={{color: '#fff'}}/>
          
          <Toast
            ref="toastSuccess"
            style={{backgroundColor: '#8ad57b'}}
            position='top'
            positionValue={200}
            fadeOutDuration={2000}
            textStyle={{color: '#000'}}/>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder="Usuario"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder="Senha"
            secureTextEntry
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TouchableOpacity style={styles.button} underlayColor="#328fe6" onPress={this.auth}>
            <Text style={styles.label}>ENTRAR</Text>
          </TouchableOpacity>
        
        </View>
        {/* </View> */}
      </ImageBackground>
    );
  }
}