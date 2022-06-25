import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters, title} from '../global/style';

export default function HomeHeader({navigation}) {

    const BadgeIcon = withBadge(0)(Icon) 
  return (
    <View style = {styles.header}>

        <View style= {{ alignItems:"center", justifyContent: "center", marginLeft: 15 }}>
        <Icon
              name="menu"
              iconStyle={{color: colors.cardBackground}}
              type="material-community"
              size = {32}
              onPress = {()=> {
                navigation.toggleDrawer();
              }}
            />
        </View>


        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 60}}>
        <Text style={{ fontSize: 25, color: colors.cardBackground, fontWeight: "bold" }}>Smart Restaurant</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 60}}>
            <BadgeIcon
            name="cart"
            iconStyle={{color: colors.cardBackground}}
            type="material-community"
            size = {35}
            />
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

