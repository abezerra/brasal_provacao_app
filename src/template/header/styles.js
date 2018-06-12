/* @flow */
'use strict';

import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from "../../styles/fonts";
import { dimensions } from "../../styles/dimensions";
import { metrics } from "../../styles/metrics";

module.exports = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.tabBarHeight,
     paddingTop: 15,
    // paddingHorizontal: 15,
    padding: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.buttons,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    color: colors.white,
  },
  title: {
    fontSize: fonts.big,
  },
  input: {
    color: colors.dark,
    padding: metrics.padding,
    height: 30,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 250,
    marginTop: 14,
  },
});