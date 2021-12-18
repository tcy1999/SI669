import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: 'lightblue',
            borderRadius:10,
            borderWidth: 3,
            borderColor: '#111'
          }}
          onPress={()=>{
            this.setState({counter: this.state.counter + 1}
          )}}
        >
          <Text style={{fontSize: 36}}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 36}}>{this.state.counter}</Text>
        <TouchableOpacity 
          style={{
            height: 100,
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: 'lightpink',
            borderRadius:10,
            borderWidth: 3,
            borderColor: '#111'
          }}
          onPress={()=>{
            this.setState({counter: this.state.counter - 1}
          )}}
        >
          <Text style={{fontSize: 36}}>-</Text>
        </TouchableOpacity>
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
});
