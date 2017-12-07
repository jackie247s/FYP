import React from 'react';
import { Icon, Text, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import SignUp from './signup';
import NewPromotion from './newpromotion';
import RenewPromotion from './renewpromotion';
import AcquireMerchant from './acquiremerchant';
import ContactUs from './contactus';

const TabBar = (props) => {
    return (
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading={<TabHeading><Icon name="md-mic" /><Text>Promotions</Text></TabHeading>}>
            <NewPromotion userid={props.userid} />
          </Tab>
          <Tab
            heading={<TabHeading><Icon name="md-analytics" /><Text>Analytics</Text></TabHeading>}
          >
            <SignUp />
          </Tab>
          <Tab
            heading={<TabHeading><Icon name="md-arrow-round-down" /><Text>Renew Promotions</Text></TabHeading>}
          >
            <RenewPromotion userid={props.userid} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <AcquireMerchant userid={props.userid} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="person" /><Text>Contact Us</Text></TabHeading>}>
            <ContactUs />
          </Tab>
        </Tabs>
    );
};

export default TabBar;
