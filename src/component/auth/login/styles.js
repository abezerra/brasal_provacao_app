/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
import { metrics } from "../../../styles/metrics";
import { dimensions } from "../../../styles/dimensions";
const { width } = Dimensions.get('window');
module.exports = StyleSheet.create({

 
  bg: {
    flex: 1,
    width: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  loginCotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {

    color: 'white',
    padding: 10,
    height: 50,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 8,
    width: ( width - 45 ),
  },
  
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.buttons,
    width: ( width - 45 ),
  },
  
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: colors.white,
  },
  
  signup: {
    fontSize: 14,
    color: '#fff',
    margin: 30,
  },
  logo: {
    //marginTop: 10,
    marginBottom: 40,
  },
  logoImage: {
     width: 84,
     height: 110,
     
  },
  
  toasterContainer: {
    backgroundColor: 'red',
  },
  
  toasterText: {
    color: '#fff',
    fontSize: 30,
  },
});