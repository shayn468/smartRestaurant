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



const Auth = createStackNavigator();

export default function AppStack(){
    return(
        <Auth.Navigator>

            
            <Auth.Screen
            name="DrawerNavigator" 
            component={DrawerNavigator} 
            options = {{ 
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid

            }}
            />


        </Auth.Navigator>





    )
}





