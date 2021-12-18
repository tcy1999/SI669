import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 
    '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import { getDataModel } from './DataModel';

function MainScreen({navigation}) {
  // get a reference to the DataModel
  this.dataModel = getDataModel();

  // initialize state with the placeholder image
  const [image, setImage] = useState(require('./assets/ImageNotAvailable.png'));

  // subscribe to data model updates
  useEffect(()=>{
    dataModel.subscribeToImageUpdate((imageObj) => {
      setImage(imageObj);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={image}
      />
      <Button
        title="Take a Picture!"
        onPress={()=>{
          navigation.navigate('Camera');
        }}
      />
    </View>
  );
}

function CameraScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  let theCamera = undefined;
  const dataModel = getDataModel();

  useEffect(() => {
    async function getPermissions(){
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    }
    getPermissions();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera 
        style={styles.camera}
        ratio='4:3'
        pictureSize='Medium'
        ref={ref => theCamera = ref}
      />
      <TouchableOpacity 
        style={styles.cameraControls}
        onPress={async ()=>{
          let picData = await theCamera.takePictureAsync();
          dataModel.updateImage(picData);
          navigation.goBack();
        }}>
        <Text style={styles.snapText}>Snap!</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main"   
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function App () {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.logo}
//         source={require('./assets/ImageNotAvailable.png')}
//       />
//       <Image
//         style={styles.logo}
//         source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },

  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 0.85,
  },
  cameraControls: {
    flex: 0.15, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: '5%',
    width: '100%',
    backgroundColor: '#222'
  },
  snapText: {
    fontSize: 36,
    color: 'white'
  },
  mainImage: {
    height: 400,
    width: 300,
    resizeMode: 'contain'
  },
});

export default App;