import React, {Component} from 'react';
import {Button, Text, View,StyleSheet,Image,TextInput} from 'react-native';


 export  default class Login extends Component{
     render(){
         return(
             
             <View style={styles.MainContainer}>
                 <TextInput style={styles.Textinput} placeholder="User Name"></TextInput>
                 <TextInput style={styles.Textinput} placeholder="Password"></TextInput>
                 <Button title="Submit"></Button>
             </View>
           
         );
     }
 }

 const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'yellow'
    },
    Textinput:{
        backgroundColor:'white'
    }

 })