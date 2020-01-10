import React, {Component} from 'react';
import* as Font from 'expo-font';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

const avatarSrc = require('./assets/icon.png');

export default class HelloReactNative extends Component {
  state = {
    isVisible: false,
    fadeValue: new Animated.Value(0),
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

    Animated.timing(this.state.fadeValue, {
      toValue: 1,
      duration: 2000
    }).start();
  }

  handleBtnClickAgain = () => {

    this.setState({
      isVisible: !this.state.isVisible,
      fadeValue: new Animated.Value(0)
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
          <Animated.View
            style={{
              opacity: this.state.fadeValue,
              alignItems: "center"
            }}
          >
          <Avatar 
            rounded
            size="xlarge"
            source = {avatarSrc}
            />
          <Text style={styles.bodyText}>
            Welcome to my
            <Text style={styles.insideText}>
            {" React Native "}
            </Text>
            App!   
          </Text>
        </Animated.View>
          
          :
          <Text/>
        }
        <Button
          buttonStyle={isVisible ? styles.bodyBtnBlue : styles.bodyBtnRed}
          title={isVisible ? "Hey! Click me again!" : "Hey! Click me!"}
          onPress={isVisible ? () => this.handleBtnClickAgain() : () => this.handleBtnClick()}
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
    fontSize: 20,
    marginTop: 40,
    marginBottom: 40,
    color: "#F88017",
  },

  insideText: {
    fontSize: 23,
    marginBottom: 40,
    color: "#0020C2",
    fontFamily: "Copperplate",
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


