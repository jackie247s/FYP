import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Signup from './components/signup';
import Login from './components/login';
import NewPromotion from './components/newpromotion';
import RenewPromotion from './components/renewpromotion';
import MainScreen from './Main';
import Popup from './Main/popup';
import TabBar from './components/tabBar';

class Routes extends Component {
	render() {
		return (
			<Router>
        <Scene hideNavBar key="root">
					<Scene key="Main" component={MainScreen} />
					<Scene key="Popup" component={Popup} title="Password" />
					<Scene key="TabBar" component={TabBar} title="TabBar" hideNavBar />
					<Scene key="Login" component={Login} title="login" hideNavBar />
					<Scene key="Signup" component={Signup} title="Register" />
					<Scene key="NewPromotion" component={NewPromotion} title="NewPromotion" />
					<Scene key="RenewPromotion" component={RenewPromotion} title="RenewPromotion" />
        </Scene>
      </Router>
    );
	}
}

export default Routes;
