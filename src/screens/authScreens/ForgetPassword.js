// import React, {useState, useRef, useContext, TouchableWithoutFeedback} from 'react';
// import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
// import {colors, parameters, title} from '../../global/style';
// import Header from '../../components/Header.js';
// import * as Animatable from 'react-native-animatable';
// import {Icon, Button, SocialIcon} from 'react-native-elements';
// import DrawerNavigator from './../../navigation/DrawerNavigator';
// import {Formik} from 'formik' 
// import auth from '@react-native-firebase/auth'
// import { SignInContext } from './../../contexts/authContext';
// import { firebase } from '@react-native-firebase/database';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import * as yup from 'yup';


// const emailSchema = yup.object({

//     email: yup.string()
//         .label('Email')
//         .required()
//         .matches(
//             /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//             "Email address is not valid"
//         ),

// });


// const sendLink = async (email, navigation) => {
//     try {
//         await firebase.auth().sendPasswordResetEmail(email)
//         Alert.alert("Success :)", "Password Reset link has been sent to your email")
//         navigation.navigate('SignInScreen')

//     } catch (e) {
//         Alert.alert("Error", e.message)
//     }
// }


// const ForgetPassword = ({navigation}) => {
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
//             <SafeAreaView style={styles.container}>
//         <Header title="Account" type="arrow-left"  navigation = {navigation}/>
//         <View style={styles.container}>
//                     <Text style={styles.text1}>
//                         Enter your registered email for the reset password link
//                     </Text>

//                     <ScrollView >
//                         <Formik
//                             initialValues={{ email: '' }}
//                             validationSchema={emailSchema}
//                             onSubmit={(values) => {
//                                 sendLink(values.email, navigation)
//                             }}>

//                             {(props) => (
//                                 <View>
//                                     <TextInput
//                                         style={styles.TextInput1}
//                                         placeholder=' Email'
//                                         autoCapitalize='none'
//                                         onChangeText={props.handleChange('email')}
//                                         value={props.values.email}
//                                         keyboardType='email-address'
//                                         onBlur={props.handleBlur('email')} />
//                                     {props.touched.email && props.errors.email && (
//                                         <Text style={styles.text1}>{props.errors.email}</Text>
//                                     )}

//                                     <Button text='Send Link' onPressButton={props.handleSubmit} />

//                                 </View>
//                             )}
//                         </Formik>
//                     </ScrollView >

//                 </View>

//             </SafeAreaView>
//         </TouchableWithoutFeedback >

//     )
// }

// export default ForgetPassword

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//       },
//       text1: {
//         color: colors.grey3,
//         fontSize: 16,
//       },
    
//       TextInput1: {
//         borderWidth: 1,
//         borderColor: '#86939e',
//         marginHorizontal: 20,
//         borderRadius: 12,
//         marginBottom: 20,
//         paddingLeft: 15,
//       },
//       TextInput2: {
//         borderWidth: 1,
//         borderColor: '#86939e',
//         marginHorizontal: 20,
//         borderRadius: 12,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignContent: 'center',
//         alignItems: 'center',
//         paddingLeft: 15,
//       },
    
//       SocialIcon:{
//         borderRadius:12,
//         height:50
//       },
    
//       createButton: {
//         backgroundColor: 'white',
//         alignContent: 'center',
//         justifyContent: 'center',
//         borderRadius: 12,
//         borderWidth: 1,
//         borderColor: '#ff8c52',
//         height: 40,
//         paddingHorizontal: 20,
//       },
    
//       createTitleButton: {
//         color: '#ff8c52',
//         fontSize: 16,
//         fontWeight: 'bold',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: -3,
//       },
// })