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
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: colors.white,
    padding: 10,
    height: 50,
    borderColor: colors.buttons,
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 8,
    width: (dimensions.default - metrics.padding),
  },
  
  picker: {
    padding: 10,
    height: 50,
    borderColor: colors.buttons,
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 8,
    width: (dimensions.default - metrics.padding),
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
  },
  
  logoImage: {
    width: 195,
    height: 41,
  },
});