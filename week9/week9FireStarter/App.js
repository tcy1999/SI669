import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { initializeFirestore, doc, getDoc } from 'firebase/firestore';
import firebaseConfig from './Secrets';

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {useFetchStreams: false});

export default function App() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  useEffect(async() => {
    const docRef = doc(db, "people", "person1");
    const docSnap = await getDoc(docRef);
    let person1 = docSnap.data();
    setFirstName(person1.firstName);
    setLastName(person1.lastName);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello {firstName} {lastName}!</Text>
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
