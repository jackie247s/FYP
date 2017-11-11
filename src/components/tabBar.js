import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Tab,Tabs,hasTabs,TabHeading,ScrollableTab } from 'native-base';
import Signup from './signup';
import Login from './login';
import NewPromotion from './newpromotion';
import RenewPromotion from './renewpromotion';
import { StyleSheet,View,Image} from 'react-native';

const TabBar=()=> {

    return (
      
        
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Icon name="md-mic" /><Text>Promotions</Text></TabHeading>}>
            <NewPromotion />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-analytics" /><Text>Analytics</Text></TabHeading>}>
            <Signup />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-arrow-round-down" /><Text>Renew Promotions</Text></TabHeading>}>
            <Login />
          </Tab>
           <Tab heading={ <TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <Signup />
          </Tab>
        </Tabs>
        
      
    );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width:null,
    height:null
  }
  });

export default TabBar;
