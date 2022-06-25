import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Pressable,Image, ScrollView, Dimensions, StatusBar} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/style';
import {filterData, productsData} from '../global/Data'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import CountDown from 'react-native-countdown-component';
import FoodCart from '../components/FoodCart';



const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {

    const [indexCheck , setIndexCheck] = useState("0")

  return (
<View style= {styles.container}>
        <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(255, 140, 82,1)"
            />

        <HomeHeader navigation = {navigation} />
        <View style = {{ marginLeft: 350  }}>
            <Icon
            name="tune"
            iconStyle={{color: colors.grey1}}
            type="material-community"
            size = {26}
            />
        </View>

    <ScrollView
        
        showsVerticalScrollIndices = {true}
        >

        <View style = {styles.headerTextView}>
            <Text style= {styles.headerText}>Categories</Text>
        </View>


        <View>
            <FlatList
            horizontal= {true}
            showsHorizontalScrollIndicator = {false}
            data = {filterData}
            keyExtractor={(item) => {item.id}}
            extraData = {indexCheck}
            renderItem = {({item,index})=>(
                <Pressable onPress = {()=>{setIndexCheck(item.id)}} >
                    <View style = {indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard} } >
                        <Image style = {{height:60, width:60, borderRadius:30}}
                        source = {item.image} 
                        />
                        <View>
                            <Text style = {indexCheck === item.id ?{...styles.smallCardTextSelected} : {...styles.smallCardText}}>
                                {item.name}
                            </Text>
                        </View>
                    </View>

                </Pressable>
            )}
                />
        </View>

        <View style = {styles.headerTextView}>
            <Text style= {styles.headerText}>Popular</Text>
            <Text style= {{fontSize:12, marginLeft:12}}>Most ordered right now!</Text>
        </View>

        


        <View>

            <View style = {{flexDirection: "row", alignItems: "center"}}>
                <Text style = {{ marginLeft: 15, fontSize:16, marginTop:6, marginRight:5, color:"black" }}>Options changing in </Text>

                <CountDown
                style = {{ marginTop:15 }}
                 until={3600}
                 size={14}
                 onFinish={() => alert('Finished')}
                 digitStyle={{backgroundColor:colors.lightGreen}}
                 digitTxtStyle={{color: colors.cardBackground}}
                 timeToShow={['M', 'S']}
                 timeLabels={{m: 'Min', s: 'Sec'}}
                />
            </View>



            <FlatList
            style = {{ marginTop:10, marginBottom:10 }}
            horizontal ={true}
            data = {productsData}
            keyExtractor = {(item,index)=> index.toString()}
            showsHorizontalScrollIndicator = {false} 
            renderItem = {({item})=>(
                <View>
                    <FoodCart
                    screenWidth={SCREEN_WIDTH*0.8}
                    images = {item.images}
                    productName = {item.productName}
                    productPrice =  {item.productPrice}
                    averageReview = {item.averageReview}
                    numberofReview = {item.numberofReview}
                    

                    />
                    </View>
            )}

             />

        </View>
        <View style = {styles.headerTextView}>
            <Text style= {styles.headerText}>Promotions avalaible</Text>
        </View>

        <View>
            <FlatList
            style = {{ marginTop:10, marginBottom:10 }}
            horizontal ={true}
            data = {productsData}
            keyExtractor = {(item,index)=> index.toString()}
            showsHorizontalScrollIndicator = {false} 
            renderItem = {({item})=>(
                <View>
                    <FoodCart
                    screenWidth={SCREEN_WIDTH*0.8}
                    images = {item.images}
                    productName = {item.productName}
                    productPrice =  {item.productPrice}
                    averageReview = {item.averageReview}
                    numberofReview = {item.numberofReview}
                    
                    />

                </View>
            )}

             />

        </View>

        <View style = {styles.headerTextView}>
            <Text style= {styles.headerText}> Discount Deals</Text>
        </View>


        <View style = {{ width: SCREEN_WIDTH,paddingTop: 10}}>
        {
            productsData.map(item=>(
                <View key={item.id} style= {{ paddingBottom:20 }}>
                   <FoodCart
                    screenWidth={SCREEN_WIDTH*0.95}
                    images = {item.images}
                    productName = {item.productName}
                    productPrice =  {item.productPrice}
                    averageReview = {item.averageReview}
                    numberofReview = {item.numberofReview}
                    
                    />

                </View>
            ))
        }

        </View>

    </ScrollView>
</View>

  )
}

const styles = StyleSheet.create({

    container:{    
        flex: 1, 
        paddingTop: 20, 
       
    },
    headerText:{
        color: colors.grey1,
        fontSize: 28,
        fontWeight:"bold",
        paddingLeft: 10,
    },

    headerTextView:{
        backgroundColor: colors.grey5,
        paddingVertical:2,
    },

    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:'center',
        alignItems: 'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems: 'center',
        padding:5,
        width:80,
        margin:10,
        height:100,
    },

    smallCardTextSelected:{
        fontWeight:'bold',
        color:colors.cardBackground,
    },
    
    smallCardText:{
        fontWeight:'bold',
        color:colors.grey2,
    },


})

