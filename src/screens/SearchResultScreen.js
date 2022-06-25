import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import SearchResultCard from './../components/SearchResultCard';
import { productsData } from '../global/Data';
import { colors } from './../global/style';




const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  return (
    
    <View style = {styles.container} >
        


      <View>
        <FlatList
        
            style = {{backgroundColor: colors.cardBackground}}
            data = {productsData}
            keyExtractor ={(item,index)=>index.toString()}
            renderItem = {({item, index})=>(

              <SearchResultCard
              screenWidth = {SCREEN_WIDTH}
              images = {item.images}
              averageReview = {item.averageReview}
              numberofReview = {item.numberofReview}
              productName = {item.productName}
              productPrice = {item.productPrice}
              productsData = {item.productData}
              onPressMenuCard = {()=>{navigation.navigate("MenuHomeScreen", {id:index, menu: item.productName})}}
              />
                )}

                ListHeaderComponent = {
                  <View>
                    <Text style = {styles.listHeader}>{productsData.length} Result for {route.params.item}</Text>
                  </View>
                }

                showsVerticalScrollIndicator ={false}
            />
        
      </View>
       
    </View>
  )
}

export default SearchResultScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
    },
    listHeader:{
        color: colors.grey1,
        fontSize: 20,
        paddingHorizontal:10,
        paddingVertical :10,
        fontWeight: 'bold',
    }
})