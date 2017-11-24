import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Signup from './components/signup';
import Login from './components/login';
import NewPromotion from './components/newpromotion';
import RenewPromotion from './components/renewpromotion';
import MainScreen from './Main';
import Popup from './Main/popup';
import TabBar from './components/tabBar';
class Routes extends React.Component {
	render() {
		return (
       <Router>
        <Scene hideNavBar={true} key="root">
         <Scene key="Main" component={MainScreen} />
           <Scene key="Popup" component={Popup} title="Password" hideNavBar={true} />
        <Scene key="TabBar" component={TabBar} title="TabBar" hideNavBar={true} />
        <Scene key="Login" component={Login} title="login" hideNavBar={true} />
        <Scene key="Signup" component={Signup} title="Register" hideNavBar={true} />
        <Scene key="NewPromotion" component={NewPromotion} title="NewPromotion" hideNavBar={true} />
        <Scene key="RenewPromotion" component={RenewPromotion} title="RenewPromotion" hideNavBar={true} />
          
        </Scene>
      </Router>
    );
   }
 }
 export default Routes;