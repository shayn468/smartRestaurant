import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native'
import { colors } from '../global/style';
import React, {useState, useRef, useEffect} from 'react'
import { productsData } from '../global/Data';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const MenuHeader = ({navigation, id}) => {

    const index2 = 10
    const currentValue = new Animated.Value(1)



    const [like , setLike] = useState(false)
    const [counter, setCounter] = useState(-2)
    const [visible, setVisible] = useState(false)

    const likeHandler = () =>{
        if(like ==false )
            setVisible(true)
        setCounter(index2)
        setLike(!like)
        
    }

    useEffect(() =>{
        if(like == true){
            Animated.spring(currentValue, {
                toValue:3,
                friction:2,
                useNativeDriver:true,
            }).start(()=> {
                Animated.spring(currentValue,{
                    toValue:1,
                    useNativeDriver: true,
                    friction: 2
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    }, [like])

  return (
    <View  style = {styles.container}>
        <ImageBackground style = {styles.container}
        source = {{ uri: productsData[id].images }}
        
        >
            <View style = {styles.view1}>
                <View style ={styles.view2}>
                <Icon
                name="arrow-left"
                color = {colors.black}
                type="material-community"
                size = {25}
                onPress = {()=>{navigation.goBack()}}
            />
            </View>

                <View style = {styles.view3}>
                <Icon
                name= {like && (index2 == counter) ? "favorite" : "favorite-border"}
                color = "red"
                type="material"
                size = {25}
                onPress = {likeHandler}
            />
                </View>
            </View>

            <View style = {styles.view4}>
                {visible && (index2 == counter) &&
                <Animated.View
                    style = {{ transform: [{scale:currentValue}] }}
                >
                    <Icon name="favorite" size={40} color = "red" type = "material" />
                </Animated.View>
                }

            </View>
        </ImageBackground>
    </View>
  )
}

export default MenuHeader

const styles = StyleSheet.create({

    container:{
        height:150,
    },

  

    view1:{
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: "space-between",


    },

    view2:{
        margin:10,
        width:40,
        height:40,
        backgroundColor: colors.cardBackground,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius:20,
    },
    view3:{
        marginTop:10,
        margin:10,
        width:40,
        height:40,
        backgroundColor: colors.cardBackground,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius:20,
    },

    view4:{
        marginTop:0,
        alignItems  : 'center',
        justifyContent: "center",
    }
})