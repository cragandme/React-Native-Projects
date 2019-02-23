import React, {Component} from 'react';
import {Button, Text, View,StyleSheet,Image,TextInput} from 'react-native';

export default class SignUp extends Component{
    constructor(props) {
        super(props)
      
        this.state = {
           name:'',
           username:'',
           passwd:''
        }
      }
    render(){
        return(
            <View style={styles.MainContainer}>
                 <TextInput style={styles.Textinput} placeholder="Name" onChangeText={name => this.setState({name})}></TextInput>
                 <TextInput style={styles.Textinput} placeholder="UserName" onChangeText={username => this.setState({username})}></TextInput>
                 <TextInput style={styles.Textinput} placeholder="Password" onChangeText={passwd => this.setState({passwd})}></TextInput>
                 <Button title="Submit" 
                 onPress={()=> {console.log(this.state.name);
                    alert("Sucessfully Registered");
                     this.props.navigation.navigate('login')}}></Button>
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
}
)
