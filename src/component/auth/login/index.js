'use strict';

import moment from 'moment';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, Button, View, StatusBar, Image } from 'react-native';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
const logo = require('../../../../assets/img/logo/logo.png')

class MyModal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('getTitle')(),
      headerLeft: (
        <Button
          onPress={() => {
            navigation.getParam('onClose')(null, navigation);
          }}
          title='Voltar'
        />
      ),
      headerRight: (
        <Button
          onPress={() => {
            navigation.getParam('onClose')(null, navigation);
          }}
          title='Confirmar'
        />
      )
    };
  };
  
  render() {
    return this.props.navigation.getParam('renderScene')();
  }
}

class Login extends React.Component {
  
  static navigationOptions = {
    // title: 'logao',
    headerStyle: {
      backgroundColor: '#e40f00',
      borderBottomColor: 'transparent',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props) {
    super(props);
    this.state = { lastSubmitValues: '' };
  }
  render() {
    return (
  
      <View style={styles.bg}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.loginCotainer}>
      
          <View style={styles.logo}>
            <Image source={logo} style={styles.logoImage} />
          </View>
  
          <GiftedForm
            formName='signupForm' // GiftedForm instances that use the same name will also share the same states
            openModal={route => {
              this.props.navigation.push('MyModal', route); // The ModalWidget will be opened using this method. Tested with ExNavigator
            }}
            clearOnClose={false} // delete the values of the form when unmounted
            defaults={{
              username: 'Farid',
              'gender{}': false,
              password: 'abcdefg',
              country: 'FR',
            }}
            style={styles.loginCotainer}>
            <GiftedForm.SeparatorWidget />
    
            <GiftedForm.TextInputWidget
              name='fullName' // mandatory
              title='Usuario'
              placeholder='username'
              clearButtonMode='while-editing'
              image={require('../../../../assets/img/icons/user.png')}
             

            />
    
            <GiftedForm.ModalWidget
              title='Centro de custo'
              displayValue='gender'
              image={require('../../../../assets/img/icons/cc.png')}
    
            >
              <GiftedForm.SeparatorWidget />
      
              <GiftedForm.SelectWidget
                name='gender'
                title='Centro de custo'
                multiple={false}
              >
                <GiftedForm.OptionWidget
                  title='30001 - TI'
                  value='30001 - TI'
                  image={require('../../../../assets/img/icons/ti.png')}
                />
                <GiftedForm.OptionWidget
                  title='30002 - TO'
                  value='30002 - TO'
                  image={require('../../../../assets/img/icons/rocket.png')}
                />
                <GiftedForm.OptionWidget
                  title='30003 - TU'
                  value='30003 - TU'
                  image={require('../../../../assets/img/icons/rocket.png')}
                />
              </GiftedForm.SelectWidget>
            </GiftedForm.ModalWidget>
    
            <GiftedForm.ErrorsWidget />
    
            <GiftedForm.SubmitWidget
              title='Entrar'
              widgetStyles={{
                submitButton: {
                  backgroundColor: '#2185D0'
                }
              }}
              onSubmit={
                (
                  isValid,
                  values,
                  validationResults,
                  postSubmit = null,
                  modalNavigator = null
                ) => { Actions.main() }
              }
            />
          </GiftedForm>
        </View>
      </View>
      
    );
  }
}

const RootNavigation = StackNavigator({
  DemoScreen: {
    screen: Login
  },
  MyModal: {
    screen: MyModal
  }
});

const root = () => <RootNavigation />;

export default root;