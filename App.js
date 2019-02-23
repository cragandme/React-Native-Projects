/**
 * Sample React Native App
 * Created By :Ayush
 */

import React, {Component} from 'react';
import {Button, Text, View,StyleSheet,Image} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './Activity/HomePage';
import Login from './Activity/LoginPage';
import SignUp from './Activity/SignUpPage';


class App extends Component{  
  render(){
    return(
        <View style={styles.MainContainers} >
        <Image source={require('./img/native.png')} style={styles.image}></Image>
           <View style={styles.childContainer}>
              <Button style={styles.Button} title="Start" 
              onPress={() => this.props.navigation.navigate('home')}></Button>
           </View>
        </View>

    );
  }
}


const styles = StyleSheet.create({
  MainContainers:{
    flex:1,
    backgroundColor:'yellow',
    justifyContent:'center',
  },
  image:{
    height:250,
    width:250,
    marginLeft:50,
    
  },
  childContainer:{
    justifyContent:'center',
    marginTop:120,
    margin:10,
    justifyContent:'space-between'
  },
  Button:{
    marginTop:20
  }
})

const Root = createStackNavigator({
  app:App,
  home:Home,
  login:Login,
  signup:SignUp
});

const container = createAppContainer(Root);
export default container;
 