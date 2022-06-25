import React, {useLayoutEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from './../screens/SearchResultScreen';
import MenuHomeScreen from './../screens/MenuHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from './../screens/PreferenceScreen';

const ClientSearch = createStackNavigator()

const ClientStack = ({navigation, route}) => {


    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "MenuHomeScreen" || "MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
        
        },[navigation,route])
  return (
    
    <ClientSearch.Navigator>
        <ClientSearch.Screen
        name = "SearchScreen"
        component = {SearchScreen}
        options = {
            ()=>({
                headerShown: false
            })
        }
        
        />
        <ClientSearch.Screen
        name = "SearchResultScreen"
        component = {SearchResultScreen}
        options = {
            ()=>({
                headerShown: false
            })
        }
        
        />
        <ClientSearch.Screen
        name = "MenuHomeScreen"
        component = {MenuHomeScreen}
        options = {
            ()=>({
                headerShown: false
            })
        }
        
        />
        <ClientSearch.Screen
        name = "MenuProductScreen"
        component = {MenuProductScreen}
        options = {
            ()=>({
                headerShown: false
            })
        }
        
        />
        <ClientSearch.Screen
        name = "PreferenceScreen"
        component = {PreferenceScreen}
        options = {
            ()=>({
                headerShown: false
            })
        }
        
        />
            
    </ClientSearch.Navigator>
  )
}

export default ClientStack


const styles = StyleSheet.create({
  
})