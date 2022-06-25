import { StyleSheet, Text, View , ImageBackground, TouchableOpacity, Image, FlatList} from 'react-native'
import React from 'react'
import { colors } from './../global/style';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import ProductCard from './ProductCard';
import { productsData } from '../global/Data';



const SearchResultCard = ({
    onPressMenuCard, 
    productName, 
    productPrice, 
    discountAvailable, 
    discountPercent, 
    numberofReview,
    averageReview,
    images, 
    screenWidth,
    productData
}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPressMenuCard}>
        <View style = {styles.view1}>
            <View style = {{ height:150 }}>
            <ImageBackground
                  style = {{height:160}}
                  source = {{uri:images}} 
                  imageStyle = {styles.imageStyle}
                  />
                    
                    <View style = {styles.image}>
                      <Text style ={styles.text1}> {averageReview}</Text>
                      <Text style ={styles.text2}> {numberofReview} reviews</Text>
                    </View>
                    
            </View>

            <View style = {styles.view3}>
                <View style = {{ flexDirection: "row", paddingTop: 10}}>
                    <Text style = {styles.text5}> {productName}</Text>
                    <Text style= {styles.text6}>{productPrice}</Text>
                </View>

            

            </View>

        </View>
    </TouchableOpacity>

        <View style = {{marginTop:5, paddingBottom:20}}>
            <FlatList 
            style = {{backgroundColor: colors.cardBackground}}
            data = {productsData}
            keyExtractor ={(item,index)=>index.toString()}
            renderItem = {({item, index})=>(
                <ProductCard
                image = {item.images}
                productName = {item.productName}
                price = {item.productPrice}
                />
                )}
                horizontal = {true}
                />
          
        </View>

    </View>
  )
}

export default SearchResultCard

const styles = StyleSheet.create({

    view1 : { 

    marginHorizontal : 9, 
    borderTopRightRadius : 5, 
    borderTopLeftRadius : 5,
     },
      
    image : {
    position : "absolute", 
    top : 0, 
    right : 0, 
    backgroundColor : 'rgba(52, 52, 52,0.4)', 
    padding : 2, 
    alignItems : "center", 
    justifyContent : "center",
    borderTopRightRadius : 5, 
    borderBottomleftRadius : 12, 
    }, 
    imageStyle : {
        borderTopLeftRadius : 5, 
        borderTopRightRadius : 5, 
    },

    text1 : {
    color : "white",
    fontSize : 20, 
    fontWeight : "bold", 
    marginTop : -3 
    }, 

    text2 : {
    color : "white", 
    fontSize : 13,
    marginRight:0,
    marginLeft:0,
    }, 
    
    view2:{
      
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center", 
        marginTop : -5,
    },
    text3: {
        fontSize : 10, 
        fontWeight : "bold", 
        color : colors.grey2,
    },
    text4: {
        fontSize : 10, 
        fontWeight : "bold", 
        color : colors.grey2,
    },
    view3:{
      
        flexDirection : "column",
        marginHorizontal:5,
        marginBottom:10,
        marginLeft:0,
        
    },

    text5: {
        fontSize : 17, 
        fontWeight : "bold", 
        color : colors.grey1,
        
    },

    view4:{
        flex:4,
        flexDirection: "row",
        borderRightWidth:1,
        borderRightColor:colors.grey4,
        paddingHorizontal:5

    },
    view5:{
        fontSize:12,
        fontWeight: "bold",
        paddingTop:5,
        color:colors.grey3,
    },

    text6:{
        fontSize:16,
        fontWeight: "bold",
        color:colors.grey1,
       marginLeft:180, 
    }



})