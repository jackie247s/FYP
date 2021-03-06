import React from 'react';
import { Icon, Text, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import SignUp from './signup';
import NewPromotion from './newpromotion';
import RenewPromotion from './renewpromotion';
import Profile from './profile';
import ContactUs from './contactus';
import ComingSoon from './comingsoon';
import Analytics from './analytics';

const TabBar = (props) => {
    const { uid, email } = props.user;
    return (
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading={<TabHeading><Icon name="md-mic" /><Text>Promotions</Text></TabHeading>}>
            <NewPromotion userid={uid} email={email} />
          </Tab>
          <Tab
            heading={<TabHeading><Icon name="md-analytics" /><Text>Analytics</Text></TabHeading>}
          >
            <Analytics />
          </Tab>
          <Tab
            heading={<TabHeading><Icon name="md-arrow-round-down" /><Text>Renew Promotions</Text></TabHeading>}
          >
            <RenewPromotion userid={uid} email={email} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="person" /><Text>Profile</Text></TabHeading>}>
            <Profile userid={uid} email={email} />
          </Tab>
          <Tab heading={<TabHeading><Icon name="person" /><Text>Contact Us</Text></TabHeading>}>
            <ContactUs userid={uid} email={email} />
          </Tab>
        </Tabs>
    );
};

export default TabBar;
