import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { colors } from './src/global/style';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SigninWelcomeScreen from './src/screens/authScreens/SigninWelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';
import 'react-native-gesture-handler';
import { SignInContextProvider } from './src/contexts/authContext';



export default function App(){
  return (
    <SignInContextProvider>
    <View style = {styles.container}>
    <StatusBar
    barStyle="light-content"
    backgroundColor = {colors.statusbar}
    />
    {/* <SigninWelcomeScreen/> */}
    <RootNavigator/>
      {/* <SignInScreen/> */}
    </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})