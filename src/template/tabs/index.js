import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

const Tabs = () => (
  
  <View style={styles.container}>
    
    <TouchableOpacity style={ styles.buttonsAndName } onPress={ () => Actions.main() }>
      <Icon name="ios-search" size={20} style={[styles.icon, styles.active]}/>
      <Text style={styles.textTabs}>Home</Text>
    </TouchableOpacity>
    
    {/*<TouchableOpacity style={ styles.buttonsAndName } onPress={ () => Actions.discover() }>*/}
      {/*<Icon name="ios-call" size={20} style={styles.icon}/>*/}
      {/*<Text style={styles.textTabs}>Contatos</Text>*/}
    {/*</TouchableOpacity>*/}
    
    
    {/*<TouchableOpacity style={styles.main} onPress={ () => Actions.discover() }>*/}
      {/*<Icon name="ios-add-outline" size={20} style={styles.mainIcon}/>*/}
    {/*</TouchableOpacity>*/}
    
    {/*<TouchableOpacity style={ styles.buttonsAndName } onPress={ () => Actions.profile() }>*/}
      {/*<Icon name="ios-contact-outline" size={20} style={styles.icon} />*/}
      {/*<Text style={styles.textTabs}>Perfil</Text>*/}
    {/*</TouchableOpacity>*/}
    
    {/*<TouchableOpacity style={ styles.buttonsAndName } onPress={ () => Actions.discover() }>*/}
      {/*<Icon name="ios-more-outline" size={20} style={styles.icon}/>*/}
      {/*<Text style={styles.textTabs}>Mais</Text>*/}
    {/*</TouchableOpacity>*/}
  
  </View>
);

export default Tabs;
