'use strict';

import React, {Component} from 'react';

import {View, Text, TouchableOpacity, Alert, Linking } from 'react-native';
import styles from './styles';
import Button from '../../template/buttons';
import Icon from 'react-native-vector-icons/Ionicons';

class Items extends Component {
  
  constructor(props) {
    super(props)
    console.log('as props do jsdkfnjsdmfsd', props)
  }
  
  __renderItem = () => (
    <View style={styles.cardBoxOfInsurance}>
      
      <View style={styles.nameAndIconOfInsurance}>
        <Text style={styles.textOfNameOfInsurance}>
          Pedido Nº { this.props.pendencia.pdc_in_codigo }
        </Text>
        
        <Text style={styles.custCenter} >
          { this.props.pendencia.cus_st_extenso } - { this.props.pendencia.cus_st_descricao }
        </Text>
      </View>
      
      <View style={styles.insurerMinimalInformations}>
        
        <View style={styles.textAndYourBall}>
          <View style={styles.circle_green}/>
          <Text style={styles.providerName} numberOfLines={1}>
            Fornecedor: { this.props.pendencia.agn_st_fantasia }
          </Text>
        </View>
        
        <View style={styles.textAndYourBall}>
          <View style={styles.circle_green}/>
          <Text style={styles.assetsAndInsurerInformations}>
            Emissão: { this.props.pendencia.pdc_dt_emissao }
          </Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.textLeft}>
          <Text style={styles.textLeftContent}>
            Descrição: { this.props.pendencia.pro_st_descricao }
          </Text>
          
          <Text style={styles.textLeftContent}>
            Quantidade: { this.props.pendencia.itp_re_qtdeaconverter }
          </Text>
          
          <Text style={styles.textLeftContent}>
            Unidade: { this.props.pendencia.uni_st_produto }
          </Text>
  
          <Text style={styles.textLeftContent}>
            Valor Un.: R$ { this.props.pendencia.itp_re_vlunitario }
          </Text>
        </View>
        
        <View style={styles.textRigth}>
          <Text style={styles.textRigthContent}>
            Total: R$ { this.props.pendencia.pdc_re_totalpedido }
          </Text>
        </View>
      
      </View>
      
      <View style={styles.theBatton}>
        <TouchableOpacity
          style={styles.button}
          underlayColor="#328fe6"
          onPress={() => Linking.openURL('http://google.com') }>
          <Button type="outline" >
            Visualizar    <Icon name="ios-checkmark-circle" style={{marginRight: 5}} size={16}/>
          </Button>
        </TouchableOpacity>
      </View>
    
    </View>
  );
  
  render() {
    
    return (
      <View>
        {this.__renderItem()}
      </View>
    )
  }
  
}


export default Items;
