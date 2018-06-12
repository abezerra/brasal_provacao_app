import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from "../../styles/fonts";
import { metrics } from "../../styles/metrics";
import { dimensions } from "../../styles/dimensions";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.buttons,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  icon: {
    color: colors.primary,
  },
  
  active: {
    color: colors.buttons,
  },
  
  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  mainIcon: {
    color: colors.white,
  },
  
  buttonsAndName: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  
  textTabs: {
    color: colors.primary
  }
});
export default styles;