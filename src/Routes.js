import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { colors } from "./styles/colors";
import Login from "./component/auth/login";
import Main from "./component/main";

export default props => (
  <Router>
    <Scene key= "login" component={ Login } hideNavBar />
    <Scene key="main" component={ Main } hideNavBar />
  </Router>
)