// In App.js in a new project

import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react'
// import database from '@react-native-firebase/database';
// import Icon from ''
// import Product from './singleProduct';
import SplashScreen from './screens/splashscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import styles from './screens/style';
import Login from './screens/login';
import Signup from './screens/signup';
import ProductDetails from './screens/productDetails';
import Favorite from './screens/favorite';
import Bag from './screens/bag';
import Order from './screens/orderRecieved';
import Menu from './screens/menu';
import Profile from './screens/profile';
// import CreateVehicle from './screens/createVehicle';
// import Bus from './screens/bus';
// import Van from './screens/van';
// import Car from './screens/car';
// import Bike from './screens/bike';
// import VehicleDetails from './screens/vehicleDetails';
// import BookingScreen from './screens/bookingScreen';
// import UserSchedule from './screens/schedule';
// import Profile from './screens/profile';
// import AppMap from './screens/map';
// import AppMap from './screens/map';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeBottomNavigator = ({ navigation, route }) => {
  let obj = route.params
  console.log(obj)
  return (
    <Tab.Navigator
    screenOptions={
      {
        tabBarActiveTintColor:styles._green,
        tabBarShowLabel:false
      }
    }
    >
      <Tab.Screen name="HomeStack" 
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: styles._danger,
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        component={HomeStackScreen} />
      <Tab.Screen name="favorite" 

        options={{
          title: 'favorite',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite-border" color={color} size={size} />
          ),
        }}
        component={Favorite} />
      <Tab.Screen name="Bag"

        options={{
          title: 'Bag',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="local-mall" color={color} size={size} />
          ),
        }}
        component={Bag} />
      <Tab.Screen name="Profile"

        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: styles._danger,

          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
        component={Profile} />
    </Tab.Navigator>
  );
}
const HomeStackScreen = () => {

  return (
    <Stack.Navigator
    >
      <Stack.Screen options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Home" component={Home} />
        <Stack.Screen options={{
        title: 'ProductDetails',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerShown:false,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="ProductDetails" component={ProductDetails} />
        <Stack.Screen options={{
        title: 'togglemenu',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerShown:false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="togglemenu" component={Menu} />
        <Stack.Screen options={{
        title: 'order',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerShown:false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="order" component={Order} />
      {/* <Stack.Screen options={{
        title: 'Bus Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Bus" component={Home} />
      
      
      <Stack.Screen options={{
        title: 'Van Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="Van" component={Home} />
      
      <Stack.Screen options={{
        title: 'Ride Booking',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="BookingScreen" component={Home} />

      <Stack.Screen options={{
        title: 'Map',
        headerStyle: {
          backgroundColor: styles._danger,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
        name="map" component={Home} /> */}
    </Stack.Navigator>
  );
}

function AppNavigation() {
  return (<>

    <NavigationContainer >

      <Stack.Navigator
        screenOptions={{
          // headerShown: false
        }}>
        <Stack.Screen options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerShown: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // tabBarIcon: ({ color, size }) => (
          //   <Icon name="home" color={color} size={size} />
          // ),
        }}
          name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="BottomNav" component={HomeBottomNavigator} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        {/* <Stack.Screen name="Bus" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}

export default AppNavigation;