import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/aboutUs';
import CustromDrawer from '../components/CustomDrawer';
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Privecy from '../screens/privecyPolicy';
import ContactScreen from '../screens/ContactScreen';
import AuthStack from './AuthStack';
import ComicArchive from '../screens/comicsArchive';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustromDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -20,
          fontWeight: 'bold',
          fontSize: 15,
        },
        drawerActiveBackgroundColor: '#F24C4C',
        drawerActiveTintColor: '#fff',

        headerShown: true,
        swipeEnabled: false,
        headerTitleAlign: 'center',
        headerTitle: 'Disaster Scans',
        headerStyle: {
          backgroundColor: '#F24C4C',
        },
        headerTintColor: '#fff',
        headerTitleAllowFontScaling: true,
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'Pacifico-Regular',
        },
      }}
      initialRouteName="Screen_A"
      drawerPosition="left"
      drawerType="front"
      edgeWidth={500}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Icons name="home-outline" size={22} color={color} />
          ),
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="ComicStack"
        component={ComicArchive}
        options={{
          drawerIcon: ({color}) => (
            <Icons name="logo-react" size={22} color={color} />
          ),
          title: 'Comics',
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({color}) => <Icons name="eye" size={22} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Privecy Policy"
        component={Privecy}
        options={{
          drawerIcon: ({color}) => (
            <Icons name="lock-open" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          drawerIcon: ({color}) => (
            <Icons name="person" size={22} color={color} />
          ),
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="contact-support" size={22} color={color} />
          ),
          title: 'Contact Us!',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
