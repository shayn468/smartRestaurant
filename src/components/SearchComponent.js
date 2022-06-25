import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, FlatList, Pressable, Image, ScrollView, Dimensions, TextInput, TouchableWithoutFeedback, Modal, TouchableOpacity, Keyboard } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/style';
import CountDown from 'react-native-countdown-component';
import FoodCart from '../components/FoodCart';
import {Icon, withBadge} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {filterData, productsData} from '../global/Data'
import filter from 'lodash/filter';


export default function SearchComponent() {

    const navigation = useNavigation();

    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFocused, settextInputFocused] = useState(true);
    const textInput = useRef(0)


const contains  = ({name}, query)=>{
    if(name.includes(query)){
        return true;
    }
    return false;
}

const handleSearch = text =>{
    const dataSearch = filter(filterData, user =>{
        return contains(user, text)
    })

    setData([...dataSearch])
}

  return (

    <View style = {{ alignItems: 'center' }}>
        <TouchableWithoutFeedback
        onPress = {()=>{
            setModalVisible(true)
        }}
        >
        <View style = {styles.SearchArea}>
            <Icon
              name="search"
              iconStyle={{marginLeft:5}}
              style = {styles.searchIcon}
              type="material"
              size = {32}
              
            />
                <View>
                    <Text style={{ fontSize:16 }}>What are you looking for?</Text>
                </View>
        </View>
        </TouchableWithoutFeedback>

        <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style= {styles.modal}>
           <View style = {styles.view1}>
                <View style = {styles.TextInput}>
                  <Animatable.View
                  animation={textInputFocused ? 'fadeInRight' : 'fadeInLeft'}
                  duration={400}>
                    <Icon
                    name=   {textInputFocused ? "arrow-back" : "search" }
                    onPress = {()=>{
                        if(textInputFocused)
                        setModalVisible(false)
                        settextInputFocused(true)
                    }}
                    iconStyle={{marginRight:5}}
                    type="material"
                    style={styles.icon2}
                    />
                </Animatable.View>

                <TextInput 

                style ={{  width: "90%" }}
                placeholder=""
                autoFocus={false}
                ref = {textInput}
                onFocus={() => {
                    settextInputFocused(true);
                  }}
                  onBlur={() => {
                    settextInputFocused(false);
                  }}
                  onChangeText={handleSearch}
                />

                <Animatable.View
                animation={textInputFocused ? 'fadeInLeft' : ''}
                duration={400}>
                
                <Icon
                    name=   {textInputFocused ? "cancel" : null }
                    iconStyle={{color: colors.grey3}}
                    type="material"
                    style={{marginRight:10}}
                    onPress = {()=>{
                        textInput.current.clear()
                        // handleSearch()
                    }}
                    />
                </Animatable.View>
                
                </View>
           </View>

           <FlatList
        data={data}
        renderItem={({item})=>(
            <TouchableOpacity
            onPress={()=>{
                Keyboard.dismiss
                navigation.navigate("SearchResultScreen", {item:item.name})
                setModalVisible(false)
                settextInputFocused(true) 
            }}>
                <View style= {styles.view2}>
                <Text style = {{ color:colors.grey2, fontSize:15 }}> {item.name}</Text>
                </View>
                </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
        </View>

    </Modal>


    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    text1:{
        color:colors.grey1,
        fontSize:16,
    },
    TextInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:"#86939e",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:10,
        paddingRight:10,
    },

    SearchArea :{
        marginTop : 10, 
        width : "94%", 
        height : 50, 
        backgroundColor : colors.grey5, 
        borderRadius : 12, 
        borderwidth : 1, 
        bordercolor : colors.grey4, 
        flexDirection : "row", 
        alignItems : "center",
    },
    
      
    searchIcon : {
        fontSize : 24, 
        padding : 5,
        color : colors.grey2,
    },
        
        
    view1 : { 
        height : 70, 
        justifyContent : "center", 
        paddingHorizontal : 10,
    },
    view2 : { 
        padding:15,
        alignItems:"center",
        flexDirection: "row",
      },

    icon2 : {
        fontSize : 24, 
        padding : 5,
        color : colors.grey2,
    },

    modal:{
        flex:1,
    }


})
