/* @flow */
'use strict';

import { StyleSheet } from 'react-native';
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

module.exports = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: colors.bg,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  
  'button-outline': {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary
  },
  
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.small
  },
  
  'text-outline': {
    color: colors.primary
  }
});