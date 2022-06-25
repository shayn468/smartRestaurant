import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {colors} from '../global/style';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import ClientTabs from './ClientTabs';
import 'react-native-gesture-handler';
import BusinessConsole from './../screens/BusinessConsole';
import DrawerContent from '../components/DrawerContent';
import Settings from '../screens/Settings';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (

    <Drawer.Navigator
    drawerContent={props =>  <DrawerContent {...props} />}
    >
        <Drawer.Screen
            name="ClientTabs"
            component={ClientTabs}
            options = {{ 
              headerShown:false,
                title: 'Client',
                drawerIcon: ({focused,size})=>(
                    <Icon 
                    name= "home"
                    type= "material-community"
                    color= {focused ? '#7cc' : colors.grey2}
                    size= {size}
                    />
                )
             }}
        
        />
        <Drawer.Screen
            name="Business Console Screen"
            component={BusinessConsole}
            options = {{ 
              headerShown:false,
                title: 'Business Console',
                drawerIcon: ({focused,size})=>(
                    <Icon 
                    name= "business"
                    type= "material"
                    color= {focused ? '#7cc' : colors.grey2}
                    size= {size}
                    />
                )
             }}
        
        />
        <Drawer.Screen
            name="Settings"
            component={Settings}
            options = {{ 
              headerShown:false,
                title: 'Settings',
                drawerIcon: ({focused,size})=>(
                    <Icon 
                    name= "settings"
                    type= "material"
                    color= {focused ? '#7cc' : colors.grey2}
                    size= {size}
                    />
                )
             }}
        
        />
        
    </Drawer.Navigator>



  )
}
