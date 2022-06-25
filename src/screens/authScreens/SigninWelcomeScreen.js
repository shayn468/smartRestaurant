import React, { useState, useRef,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { colors, parameters, title } from '../../global/style';
import Header from '../../components/Header.js';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import { SignInContext } from './../../contexts/authContext';
import auth  from '@react-native-firebase/auth';

export default function SigninWelcomeScreen({navigation}) {

    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
          if(user){
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
          }else{
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
          }
        })
        
      },[])


    return (
        <View style={{ flex: 1 }}>
            
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', marginTop: 10, padding: 20 }}>
                <Text style={{ fontSize: 30, color: colors.buttons, fontWeight: "bold" }}>Smart</Text>
                <Text style={{ fontSize: 24, color: colors.buttons, fontWeight: "bold" }}>Restaurant</Text>
            </View>


            <View style={{ flex: 4, justifyContent: "center" }}>
            <Swiper autoplay={true}>
                <View style= { styles.slide1}>
                <Image
                source = {{ uri: "https://www.mamaxpert.com/media/magefan_blog/Food-Items-To-Avoid-After-Pregnancy.jpg" }}
                style = {{ height: "100%", width: "100%" }}
                
                />
                </View>
                <View style= { styles.slide2}>
                <Image
                source={{uri: "https://www.todaystraveller.net/wp-content/uploads/2021/04/17-Khadai-ka-Jhinga-768x576.jpg"}}
                style = {{ height: "100%", width: "100%" }}
                
                />
                </View>

                <View style= { styles.slide3}>
                <Image
                source = {{ uri: "https://www.todaystraveller.net/wp-content/uploads/2021/04/06-Lucknowi-Seekh-1024x768.jpg" }}
                style = {{ height: "100%", width: "100%" }}
                
                />
                </View>
                <View style= { styles.slide3}>
                <Image
                source = {{ uri: "https://www.todaystraveller.net/wp-content/uploads/2021/04/Dahi-Ke-Kebab-Taj-Palace-New-Delhi-300x200.jpg" }}
                style = {{ height: "100%", width: "100%" }}
                
                />
                </View>
                <View style= { styles.slide3}>
                <Image
                source = {{ uri: "https://www.todaystraveller.net/wp-content/uploads/2021/04/Food-Shot-1-1-1024x683.jpg" }}
                style = {{ height: "100%", width: "100%" }}
                
                />
                </View>
            </Swiper>
            </View>

            <View style={{ flex:4, justifyContent: "flex-end" , marginBottom:20 }}>
                <View style = {{marginHorizontal:20 , marginTop:30}}>
                    <Button
                    title= "Sign In"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = { parameters.buttonTitle}
                    onPress = { ()=> {
                        navigation.navigate("SignInScreen")
                    }}
                    />
                </View>

        <View style = {{ marginHorizontal:20, marginTop:20 }}>
            <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createTitleButton}
            onPress = {()=>{
                navigation.navigate("SignUpScreen")
            }}
            />
      </View>

            </View>

        </View>

    )
}


const styles = StyleSheet.create({

    slide1: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#9006EB",
    },
    slide2 : {
        flex : 1, 
        justifyContent : "center", 
        alignItems : "center", 
        backgroundColor: "#97CAES",
    }, 
    slide3 :{

        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor : "#928809",

    },

    createButton: {
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 40,
        paddingHorizontal: 20,
        borderColor: colors.buttons,
      },
    
      createTitleButton: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
      },

})