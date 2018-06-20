'use strict';

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles'

class Header extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        {/*<TextInput*/}
          {/*placeholder="Pesquisar"*/}
          {/*placeholderTextColor="#fff"*/}
          {/*style={styles.input}*/}
          {/*multiline={false}/>*/}
        {/*<Icon name="filter" size={24} style={styles.icons} />*/}
      
      </View>
    );
  }
}

export default Header;