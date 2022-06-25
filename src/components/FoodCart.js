import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable,Image, ScrollView} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/style';
import {filterData} from '../global/Data'
import { Icon } from 'react-native-elements/dist/icons/Icon';



export default function FoodCart(
    {
        OnPressFoodCard, 
        productName, 
        productPrice, 
        discountAvailable, 
        discountPercent, 
        numberofReview,
        averageReview,
        images, 
        screenWidth
    }
) {
  return (
    <TouchableOpacity>
        <View style = {{ ...styles.cardView, width:screenWidth }}>
        <Image
        style = {{...styles.image, width: screenWidth}}
        source = {{ uri: images }}
        />
          <View>
            <View style = {{ alignItems: "center",flexDirection: "row", justifyContent: "space-between" }}>
                <Text style = {styles.productName}> {productName}</Text>
                <Text style = {styles.productPrice}> {productPrice}</Text>
            </View>
        </View>


        <View style = {styles.review}>
        <Text style = {styles.average}>{averageReview}</Text>
        <Text style = {styles.numberofReview}>{numberofReview} reviews</Text>
        </View>
        </View>

      


    </TouchableOpacity>

  )
}


const styles = StyleSheet.create({
cardView:{
    marginHorizontal:9,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderWidth:1,
    borderColor: colors.grey4,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
},

image:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5, 
    height:150,


},
productName:{
    fontSize:17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop:5,
    marginLeft:5,
},
productPrice:{
    fontSize:15,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop:4,
    marginRight:10,
},


review:{
position: "absolute",
top: 0,
right: 10,
backgroundColor: 'rgba(52,52,52,0.3)',
padding:2,
alignItems: "center",
justifyContent: 'center',
borderTopRightRadius: 5,
borderBottomLeftRadius:12,
},

numberofReview:{
color: "white",
fontSize: 13,
marginRight:0,
marginLeft:0,
},

average:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
}
})