import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Signup from './components/signup';
import Login from './components/login';
import ForgetPassword from './components/forgetPassword';
import NewPromotion from './components/newpromotion';
import RenewPromotion from './components/renewpromotion';
import AcquireMerchant from './components/acquiremerchant';
import PleaseWait from './components/pleasewait';
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
					<Scene
						key="ForgetPassword" component={ForgetPassword} title="ForgetPassword" hideNavBar
					/>
					<Scene key="Signup" component={Signup} title="Register" />
					<Scene key="NewPromotion" component={NewPromotion} title="NewPromotion" />
					<Scene key="RenewPromotion" component={RenewPromotion} title="RenewPromotion" />
					<Scene key="AcquireMerchant" component={AcquireMerchant} title="AcquireMerchant" />
					<Scene key="PleaseWait" component={PleaseWait} title="PleasWait" />
        </Scene>
      </Router>
    );
	}
}

export default Routes;
