import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';

export default function BusinessConsole() {
  return (
    <View style = {styles.container}>
        <Text>
            Welcome to business Console
            </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    // header:{
        
    //     flexDirection: "row",
    //     backgroundColor: colors.buttons,
    //     height: parameters.headerWeight,
    // },

    // headerText: {
    //     color: colors.headerText,
    //     fontSize: 22,
    //     fontWeight: "bold",
    //     marginLeft:30
    //     marginTop:-20,
    //     padding:9,
    //     alignContent: "space-between",
    //     alignItems: "center"
    // }
})

