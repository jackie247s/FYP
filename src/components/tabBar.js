import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Tab,Tabs,hasTabs,TabHeading,ScrollableTab } from 'native-base';
import Signup from './signup';
import NewPromotion from './newpromotion';
import Profile from './profile';

const TabBar=()=> {

    return (
      <Container>

        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Icon name="md-mic" /><Text>Promotions</Text></TabHeading>}>
            <NewPromotion />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-analytics" /><Text>Analytics</Text></TabHeading>}>
            <Signup />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="md-arrow-round-down" /><Text>Renew Promotions</Text></TabHeading>}>
            <Signup />
          </Tab>
           <Tab heading={ <TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <Profile />
          </Tab>
        </Tabs>
      </Container>
    );
}

const styles = {
  TextStyle:{
    fontSize:10
  }
}

export default TabBar;
