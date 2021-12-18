import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class DarkModeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      switchValue: false,
      switchStatus: 'Off'
    }
  }

  render() {
    return (
      <View style={[oneStyle.container, 
        this.state.switchValue ? 
          oneStyle.bgDark : 
          {} ]}>
        <Text style={this.state.switchValue ?
          oneStyle.textDark :
          oneStyle.textLight}>
          Dark Mode: 
          {this.state.switchValue ?
            "On" :
            "Off"
          }
        </Text>
        <Switch
          onValueChange={this.onValueChange}
          value={this.state.switchValue}/>
      </View>
    );
  }

 onValueChange = (value) => {
  let status = 'Off'; // default to Off
  if (value) {        // change to On if value==true
    status = 'On';
  }
  this.setState({     // update state with value, status, and style
    switchValue: value,
    switchStatus: status
  });
}
}

const oneStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
  },
  bgDark: {
    backgroundColor: 'black'
  },
  textLight: {
    color: 'black'
  },
  textDark: {
    color: 'white'
  }
});