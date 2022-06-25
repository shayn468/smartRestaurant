import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { colors, parameters } from '../global/style'
import {Icon, icon} from "react-native-elements"
import { goBack } from './../../node_modules/@react-navigation/routers/lib/module/CommonActions';

export default function Header({title, type, navigation}) {
  return (
    <View style = {styles.header}>
        <View style={{  marginLeft:20, marginTop: 5 }}>
            <Icon 
            type='material-community'
            name= {type}
            color={colors.headerText}
            size={28}
            onPress = {()=>{
                navigation.goBack()
            }} />
        </View>
        <View>
                <Text style= {{ color: "white", marginTop:6, fontSize:20, marginLeft:20, fontWeight:"bold" }}>
                        {title}
                </Text>
        </View> 
            
    </View>
  )
}


const styles = StyleSheet.create({
    header:{
        
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerWeight,
    },

    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft:30
        // marginTop:-20,
        // padding:9,
        // alignContent: "space-between",
        // alignItems: "center"
    }
})

