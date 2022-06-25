import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Pressable,Image, ScrollView, Dimensions} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/style';
import {filterData, productsData} from '../global/Data'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import CountDown from 'react-native-countdown-component';
import FoodCart from '../components/FoodCart';



export default function AccountScreen() {
  return (

    <View>
        <Text> Account</Text>
    </View>
  )
}
