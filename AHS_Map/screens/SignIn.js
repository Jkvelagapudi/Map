import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';


    
export default class SignIn extends Component {
  render(){
    return (
      
      <View style={styles.container}>
        <View>
        <StatusBar style="auto" />
        <Text style={styles.titlez}>Sign in</Text>
        <Text style={styles.titlem}>AHS Map and Availibilty</Text>
        {/* <View style={styles.rectangle}/> */}
        <TextInput style={[styles.input, {padding: 10}]}
                            autoCapitalize="none"
                            placeholder="Enter Username"
                            autoCorrect={false}
                            secureTextEntry={false}
                           
                            
                            
                        />
        
        <TextInput style={[styles.input, {padding: 10}]}
                        autoCapitalize="none"
                        placeholder="Enter Password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        />   
                        

    </View>

    <View>

       <TouchableOpacity 
        style={styles.button}
        onPress = {() => this.props.navigation.navigate('SignIn') }
       > 
          <Text> Sign In </Text>
        </TouchableOpacity>

       
        </View>

      </View>
      
    );
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F84F10',
      alignItems: 'center',
      justifyContent: 'top',
    },
    rectangle: {
        height: 50,
        width: 380, 
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 99,
        top: '27%',
        left: '5%'
       },
       input: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 350,
        height: 80,
        margin: 20
      },
      titlez: {
        fontSize: 40,
        top: 150,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: "center"
      },
      titlem: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: 'red',
        borderRadius: 6,
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic'
        },
       button: {
        
        width: 150,
        alignItems: "center",
        top: 200,
        padding: 20,
        borderRadius: 50,
        backgroundColor: "#00BC9C"
       }
  });
