import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import OrderScreen from '../screens/OrderScreen';
import AccountScreen from './../screens/AccountScreen';
import { colors } from './../global/style';
import { Icon } from 'react-native-elements';
import ClientStack from './ClientStack';

const ClientTabsvar = createBottomTabNavigator();

export default function ClientTabs() {
  return (

    <ClientTabsvar.Navigator
    tabBarOptions = {{
        activeTintColor: colors.buttons
    }}
    >
        <ClientTabsvar.Screen
        
        name="HomeScreen" 
        component={HomeScreen}
        options = {
            {
                headerShown:false,
                tabBarLabel: "Home",
                tabBarIcon: ({color,size})=>(
                    <Icon 
                    name="home"
                    iconStyle={{color: colors.grey1}}
                    type="material"
                    size = {26}
                    />
                   
                    
  )
            }
        }
        />
        <ClientTabsvar.Screen
        
        name="ClientStack" 
        component={ClientStack}
        options = {
            {
                headerShown:false,
                tabBarLabel: "Search",
                tabBarIcon: ({color,size})=>(
                    <Icon 
                    name = 'search'
                    type = 'material'
                    color = {color}
                    size = {size}

                    />
                )
            }
        }
        />
        <ClientTabsvar.Screen
        
        name="OrderScreen" 
        component={OrderScreen}
        options = {
            {
                headerShown:false,
                tabBarLabel: "Order",
                tabBarIcon: ({color,size})=>(
                    <Icon 
                    name = "view-list"
                    type = 'material'
                    color = {color}
                    size = {size}

                    />
                )
            }
        }
        />
        <ClientTabsvar.Screen
        
        name="AccountScreen" 
        component={AccountScreen}
        options = {
            {
                headerShown:false,
                tabBarLabel: "Account",
                tabBarIcon: ({color,size})=>(
                    <Icon 
                    name = 'person'
                    type = 'material'
                    color = {color}
                    size = {size}

                    />
                )
            }
        }
        />

       
    </ClientTabsvar.Navigator>


  )
}
