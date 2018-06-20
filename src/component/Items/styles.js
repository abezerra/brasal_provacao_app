import { StyleSheet, Dimensions } from 'react-native';
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { metrics } from "../../styles/metrics";

const width = Dimensions.get('window');
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: colors.white
  },
  
  cardBoxOfInsurance: {
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowRadius: 7,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 1},
    flex: 1,
    opacity: (0.8),
  },
  
  nameAndIconOfInsurance: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  iconOfInsurance: {
    width: 60,
    height: 60,
    //borderRadius: 40,
    //borderWidth: 3,
    //borderColor: '#9aaca5',
    marginTop: 7,
    alignItems: 'center',
  },
  
  textOfNameOfInsurance: {
    fontSize: fonts.big_gib,
    marginTop: 7,
    textAlign: 'center',
    color: colors.dark,
    backgroundColor: 'transparent',
    fontFamily: 'arial',
    fontWeight: '600',
  },
  
  custCenter: {
    fontSize: fonts.small,
    marginTop: 3,
    textAlign: 'center',
    color: colors.dark,
    backgroundColor: 'transparent',
    fontFamily: 'arial',
    fontWeight: '400',
  },
  
  insurerMinimalInformations: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  
  textAndYourBall: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  circle_green: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.primary,
    marginRight: 7,
  },
  
  assetsAndInsurerInformations: {
    marginTop: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontWeight: '300',
    // fontFamily: 'arial',
    color: colors.dark,
    fontSize: 14,
  },
  
  providerName: {
    marginTop: 1,
    backgroundColor: 'transparent',
    fontWeight: '300',
    // fontFamily: 'arial',
    color: colors.dark,
    fontSize: 14,
    flex: 1,
    alignItems: 'flex-start',
  },
  
  viewOfApoliceNumberAnDates: {
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  
  textLeft: {
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
  
  textRigth: {
    alignItems: 'flex-end'
  },
  
  textLeftContent: {
    color: colors.fonsts,
    fontSize: 14,
    fontWeight: '400',
    margin: 3,
  },
  
  textRigthContent: {
    color: colors.dark,
    fontSize: fonts.big,
    fontWeight: '600',
    margin: 8,
  },
  
  theBatton: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  
  button: {
    margin: 5,
  },
  
});
export default styles;