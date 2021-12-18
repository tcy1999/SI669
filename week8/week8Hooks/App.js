import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  let [greeting, setGreeting] = useState("Hello");
  let [counter, setCounter] = useState(0);

  useEffect(()=> {
    let intervalTimerID = setInterval(()=>{
      setCounter(counter => counter + 1);
    }, 1000);
    return (()=>{
      clearInterval(intervalTimerID);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Text>You've pressed the button {counter} times!</Text>
      <Button
        title="More!"
        onPress={()=>{
          setCounter(counter => counter + 1);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
