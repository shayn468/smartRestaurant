import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import 'react-native-gesture-handler'
import HomeScreen from '../screens/HomeScreen';
import ClientTabs from './ClientTabs';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import ForgetPassword from '../screens/authScreens/ForgetPassword';


const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
            name="SignInWelcomeScreen" 
            component={SignInWelcomeScreen} 
            options = {{ 
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid

             }}
            />
            <Auth.Screen
            name="SignInScreen" 
            component={SignInScreen} 
            options = {{ 
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid

             }}
            />
           
            <Auth.Screen
            name="SignUpScreen" 
            component={SignUpScreen} 
            options = {{ 
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid

             }}
            />
            {/* <Auth.Screen
            name="ForgetPassword" 
            component={ForgetPassword} 
            options = {{ 
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid

             }}
            /> */}

        </Auth.Navigator>
        )
}