import React, { Component } from 'react';
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
  Picker,
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
const logo = require('../../../../assets/img/logo/logo.png')

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.auth = this.auth.bind(this);
  }
  
  async auth() {
    await axios.post(`/authenticate`, {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
        AsyncStorage.setItem('@MySuperStore:token', res.data.success.token);
        Actions.main();
      })
      .catch((err) => {
        console.log('Erro ao se logar', err);
      });
  }
  
  render() {
    return (
      <View style={styles.bg}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.loginCotainer}>
          
          <View style={styles.logo}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Usuario"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Centro de Custo"
            secureTextEntry
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff"
          />
  
          <Picker
            selectedValue={this.state.language}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Centro de custo" value="java" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          
          <TouchableOpacity style={styles.button} underlayColor="#328fe6" onPress={() => Actions.main()}>
            <Text style={styles.label}>Entrar</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}