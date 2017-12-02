import React from 'react';
import { Icon, Text, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import Signup from './signup';
import NewPromotion from './newpromotion';
import RenewPromotion from './renewpromotion';
import AcquireMerchant from './acquiremerchant';

const TabBar = () => {
    return (
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading={<TabHeading><Icon name="md-mic" /><Text>Promotions</Text></TabHeading>}>
            <NewPromotion />
          </Tab>
          <Tab heading={<TabHeading><Icon name="md-analytics" /><Text>Analytics</Text></TabHeading>}>
            <Signup />
          </Tab>
          <Tab heading={<TabHeading><Icon name="md-arrow-round-down" /><Text>Renew Promotions</Text></TabHeading>}>
            <RenewPromotion />
          </Tab>
           <Tab heading={<TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <AcquireMerchant />
          </Tab>
        </Tabs>
    );
};

export default TabBar;
