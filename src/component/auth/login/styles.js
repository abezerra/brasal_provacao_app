/* @flow */
'use strict';

import { StyleSheet } from 'react-native';
import { colors } from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";
import { metrics } from "../../../styles/metrics";
import { dimensions } from "../../../styles/dimensions";

module.exports = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
    backgroundColor: colors.bg
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  loginCotainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    
  },

  
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.buttons,
    width: (dimensions.default - metrics.padding),
  },
  label: {
    width: (dimensions.default - metrics.padding),
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  signup: {
    fontSize: fonts.regular,
    color: colors.white,
    margin: 30,
  },
  
  logo: {
    marginTop: 70,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logoImage: {
    width: 195,
    height: 41,
  },
});