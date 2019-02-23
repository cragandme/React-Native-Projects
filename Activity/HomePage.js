import React, {Component} from 'react';
import {Button, Text, View,StyleSheet,Image} from 'react-native';


 export default class Home extends Component{
   render(){
        return(
            <View style={styles.MainContainer }>
                <View style={styles.ChildContainer }>
                    <Button title="Login" 
                   onPress={() => this.props.navigation.navigate('login')}></Button>
                    <Button title="Sign-Up"
                    onPress={() => this.props.navigation.navigate('signup')}></Button>
                </View>
            </View>
        );
   }

}

const styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center'
    },
    ChildContainer:{
        justifyContent:'center',
        justifyContent:'space-between',
    }

})

