import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class HelloReactNative extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.header}>
          My First Mobile App
        </Text>
        <Text style={styles.bodyText}>
          Welcome to my React Native App!   
        </Text>
        <Button
          buttonStyle={styles.bodyBtn}
          title="Hey! Click me!"
        />
        <Text style={styles.footer}>
          Developed By: JCGDeGuzman   
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    position: "absolute",
    top: 0,
    height: 70,
    width: "100%",
    backgroundColor: "#0C090A",
    color: "white",  
    textAlign: "center",
    lineHeight: 70,
    paddingTop: 15,
    fontSize: 20
  },

  footer: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#0C090A",
    color: "white",  
    textAlign: "center",
    lineHeight: 50,
    fontSize: 15
  },

  bodyText: {
    fontSize: 23,
    marginBottom: 40,
  },

  bodyBtn: {
    backgroundColor: "#9F000F",
    width: 200,
    height: 50,
  },
});


