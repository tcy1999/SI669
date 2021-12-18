import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={styles.body}>
    <View style={styles.section}>
      <View style={styles.boxLeft}>
        <Text>Silver Box 175x175</Text>
      </View>
      <View style={styles.boxLeft}>
        <Text>Silver Box 175x175</Text>
      </View>
    </View>
    <View style={styles.section}>
      <View style={styles.boxRight}>
        <Text>Gold Box 125x125</Text>
      </View>
      <View style={styles.boxRight}>
        <Text>Gold Box 125x125</Text>
      </View>
      <View style={styles.boxRight}>
        <Text>Gold Box 125x125</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  section: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  boxLeft: {
    backgroundColor: 'silver',
    height: 175,
    width: 175,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxRight: {
    backgroundColor: 'gold',
    height: 125,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
