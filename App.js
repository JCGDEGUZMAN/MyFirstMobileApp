import React, {Component} from 'react';
import* as Font from 'expo-font';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class HelloReactNative extends Component {
  state = {
    isVisible: false
  }

  componentDidMount = async() => {
    await Font.loadAsync({
      'Copperplate': require('./assets/fonts/Copperplate_Gothic_Bold_Regular.ttf'),
    }) 
  }

  handleBtnClick = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  
  render(){
    const { isVisible } = this.state;
    return(
      <View style={styles.container}>
        <Text style={styles.header}>
          My First Mobile App
        </Text>
        {
          isVisible 
          ?
          <Text style={styles.bodyText}>
            Welcome to my React Native App!   
          </Text>
          :
          <Text/>
        }
        <Button
          buttonStyle={isVisible ? styles.bodyBtnBlue : styles.bodyBtnRed}
          title={isVisible ? "Hey! Click me again!" : "Hey! Click me!"}
          onPress={() => this.handleBtnClick()}
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
    fontSize: 20,
    fontFamily: "Copperplate",
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
    fontSize: 15,
    fontFamily: "Copperplate",
  },

  bodyText: {
    fontSize: 23,
    marginBottom: 40,
    color: "red",
  },

  bodyBtnRed: {
    backgroundColor: "#9F000F",
    width: 200,
    height: 50,
  },

  bodyBtnBlue: {
    backgroundColor: "#307D7E",
    width: 200,
    height: 50,
  },
});


