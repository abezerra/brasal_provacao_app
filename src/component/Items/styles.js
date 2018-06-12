import {StyleSheet} from 'react-native';
import {colors} from "../../styles/colors";

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  
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
    fontSize: 18,
    marginTop: 3,
    textAlign: 'center',
    color: '#9aaca5',
    backgroundColor: 'transparent',
    fontFamily: 'arial',
    fontWeight: '600',
  },
  
  insurerMinimalInformations: {
    // borderRadius: 30,
    // borderWidth: 1,
    // borderColor: '#00645D',
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
    borderColor: '#005c5b',
    borderWidth: 1,
    backgroundColor: '#005c5b',
    marginRight: 7,
  },
  
  assetsAndInsurerInformations: {
    marginTop: 1,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontWeight: '300',
    // fontFamily: 'arial',
    color: '#005c5b',
    fontSize: 16,
  },
  
  
  viewOfApoliceNumberAnDates: {
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  
  textLeft: {
    alignItems: 'flex-start'
  },
  
  textRigth: {
    alignItems: 'flex-end'
  },
  
  textLeftContent: {
    color: '#7b9088',
    fontSize: 16,
    fontWeight: '400',
    margin: 3,
  },
  
  textRigthContent: {
    color: '#005c5b',
    fontSize: 16,
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