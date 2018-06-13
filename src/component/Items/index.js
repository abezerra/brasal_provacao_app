'use strict';

import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Alert, Linking } from 'react-native';
import styles from './styles';
import Button from '../../template/buttons';
import Icon from 'react-native-vector-icons/Ionicons';

class Items extends Component {
  
  __renderItem = () => (
    <View style={styles.cardBoxOfInsurance}>
      
      <View style={styles.nameAndIconOfInsurance}>
        <Text style={styles.textOfNameOfInsurance}>
          Pedido Nº 00007
        </Text>
        
        <Text style={styles.textOfNameOfInsurance}>
          301005 - Tecnologia da informação
        </Text>
      </View>
      
      <View style={styles.insurerMinimalInformations}>
        
        <View style={styles.textAndYourBall}>
          <View style={styles.circle_green}/>
          <Text style={styles.assetsAndInsurerInformations}>
            Fornecedor: Apple Inc
          </Text>
        </View>
        
        <View style={styles.textAndYourBall}>
          <View style={styles.circle_green}/>
          <Text style={styles.assetsAndInsurerInformations}>
            Emissão: 10/10/1910
          </Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.textLeft}>
          <Text style={styles.textLeftContent}>
            Descrição: iphone x red
          </Text>
          
          <Text style={styles.textLeftContent}>
            Quantidade: 1
          </Text>
          
          <Text style={styles.textLeftContent}>
            Unidade: UN
          </Text>
  
          <Text style={styles.textLeftContent}>
            Valor Un.: 2.800,00
          </Text>
        </View>
        
        <View style={styles.textRigth}>
          <Text style={styles.textRigthContent}>
            Total: R$ 2.800,00
          </Text>
        </View>
      
      </View>
      
      <View style={styles.theBatton}>
        <TouchableOpacity
          style={styles.button}
          underlayColor="#328fe6"
          onPress={() => Linking.openURL('http://google.com') }>
          <Button type="outline" >
            Visualizar
            <Icon name="ios-checkmark-circle" size={16}/>
          </Button>
        </TouchableOpacity>
      </View>
    
    </View>
  );
  
  // __renderLinking = () => {
  //   Linking.canOpenURL('http://google.com').then(supported => {
  //     if (!supported) {
  //       console.log('Can\'t handle url: ' + url);
  //     } else {
  //       return ;
  //     }
  //   }).catch(err => console.error('An error occurred', err));
  //
  // }
  render() {
    
    return (
      <View>
        {this.__renderItem()}
      </View>
    )
  }
  
}


export default Items;
