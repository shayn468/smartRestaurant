import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, Switch, Alert} from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { colors } from './../global/style';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../contexts/authContext';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function DrawerContent(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const {dispatchSignedIn} = useContext(SignInContext)
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


async function signOut(){
                try {
                    auth()
                    .signOut()
                    .then(
                        ()=>{
                            console.log("User Suceessfully Signed Out")
                            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})

                        }
                        )
                      }
                       catch (error) {
                        Alert.alert(error.code)
                    }
                }


  return (
    <View style= {{flex:1}}>
        <DrawerContentScrollView {...props} >

            <View style = {{backgroundColor: colors.buttons}}>

            <View style= {{flexDirection: "row", alignItems: "center", backgroundColor: colors.buttons, paddingLeft: 15, paddingVertical:10}}>
                <Avatar
                rounded
                avatarStyle={styles.avatar}
                size={65}
                source = {{ uri: "https://chandnichowkgrill.com/wp-content/uploads/2022/01/Chiken-Tika-Masala-Rice-Nan.jpg" }}
                
                />

                <View style = {{ marginLeft:10 }}>
                    <Text style= {{fontWeight:"bold", color: colors.cardBackground , fontSize:18}}>Shayan Ejaz</Text>
                    <Text style= {{ color: colors.cardBackground, fontSize:14}}>shayan876@gmail.com</Text>
                </View>

            </View>

        <View style = {{flexDirection: "row", justifyContent: "space-evenly", paddingBottom: 5}}>

                <View style = {{flexDirection: "row", marginTop: 10}}>
                    <View style = {{maginLeft: 10, alignItems:"center", justifyContent: "center"}}>

                        <Text style = {{ fontWeight: "bold", color : colors.cardBackground, fontSize:18}}>1</Text>
                        <Text style = {{  color : colors.cardBackground, fontSize:14}}>My Favorites</Text>

                    </View>
                </View>


                <View style = {{flexDirection: "row", marginTop: 10, marginRight:10}}>
                    <View style = {{maginLeft: 10, alignItems:"center", justifyContent: "center"}}>

                        <Text style = {{ fontWeight: "bold", color : colors.cardBackground, fontSize:18}}>0</Text>
                        <Text style = {{  color : colors.cardBackground, fontSize:14}}>My Cart</Text>

                    </View>
                </View>

            </View>


        </View>

       <DrawerItemList {...props} />

       {/* <DrawerItem
        label="Payment"
        icon = {({color,size})=>(
            <Icon 
            name= "credit-card-outline"
            type= "material-community"
            color= {color}
            size= {size}
            // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
        )} */}
{/*     
        />
       <DrawerItem
        label="Promotions"
        icon = {({color,size})=>(
            <Icon 
            name= "tag-heart"
            type= "material-community"
            color= {color}
            size= {size}
            // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
        )}
    
        /> */}
       
       {/* <DrawerItem
        label="Settings"
        icon = {({color,size})=>(
            <Icon 
            name= "cog-outline"
            type= "material-community"
            color= {color}
            size= {size}
            onPress={() => {navigation.navigate("Settings")}}
            />
        )}
    
        /> */}
       <DrawerItem
        label="Help"
        icon = {({color,size})=>(
            <Icon 
            name= "lifebuoy"
            type= "material-community"
            color= {color}
            size= {size}
            // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
        )}
    
        />

        <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
            <Text style={ styles.preferences}>
                Preferences
            </Text>

            <View style= {styles.switchText}>
                <Text style={ styles.darkThemeText}> Dark Theme</Text>

                <View style= {{paddingRight:10}}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                </View>
            </View>
        </View>
        
        


        </DrawerContentScrollView>

       <TouchableOpacity onPress={()=> {signOut()}} >
        <DrawerItem
        label="Sign Out"
        icon = {({color,size})=>(
            <Icon 
            name= "logout-variant"
            type= "material-community"
            color= {color}
            size= {size}
            onPress ={()=>{signOut()}} 
    
            />
        )}
    
        />
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
},
avatar:{
    borderWidth: 4,
    borderColor: colors.pagebackground,
   
},
switchText:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft:20,
    paddingVertical:5,
    paddingRight:10,
},
darkThemeText:{
    fontSize:10,
    color: colors.grey2,
    paddingTop:10,
    paddingLeft:0,
    fontWeight:'bold',
}
})