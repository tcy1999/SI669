import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { getDataModel } from './DataModel';

function DetailsScreen({navigation, route}) {
  const dataModel = getDataModel();
  const item = route.params ? route.params.item : null;
  const addMode = item == null;
  const [inputText, setInputText] = useState(addMode? '' : item.text);

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Item:</Text>
        <Input 
          containerStyle={styles.inputBox} 
          placeholder="New Todo Item"
          value={inputText}
          onChangeText={(text)=>setInputText(text)}
        />
      </View>      
      <View style={styles.buttonArea}>
        <Button
          containerStyle={styles.button}
          title="Cancel"
          onPress={()=>{
            navigation.navigate("Home");
          }}
        />
        <Button
          containerStyle={styles.button}
          title={addMode ? "Add Item": 'Save'}
          onPress={()=>{
            if (addMode) {
                dataModel.addItem({text: inputText}); 
            }
            else {
                dataModel.updateItem(item.key, {text: inputText, key: item.key});
            }
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30
  },
  inputArea: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputLabel: {
    flex: 0.2,
    textAlign: 'right',
    fontSize: 18,
    paddingRight: 10,
    paddingBottom: 10
  },
  inputBox: {
    flex: 0.8,
  },
  buttonArea: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'space-between',
    //alignItems: 'center',
    width: '70%',
    //backgroundColor: 'tan'
  },
  button: {
    width: '40%'
  }
});

export default DetailsScreen;
