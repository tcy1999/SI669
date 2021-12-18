import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button, CheckBox, ListItem } from 'react-native-elements';
import { getDataModel } from './DataModel';

function DetailsScreen({navigation, route}) {
  const dataModel = getDataModel();
  let item = route.params ? route.params.item : {};
  let editMode = (route.params != null);
  const [inputText, setInputText] = useState(editMode? item.text : '');
  const [priority, setPriority] = useState(editMode? item.priority: 1);
  const [checked, setChecked] = useState(editMode? item.checked: false);
  const priorityList = [1, 2, 3];

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Item:</Text>
        <Input 
          containerStyle={styles.inputBox} 
          placeholder="New Todo Item"
          onChangeText={(text)=>setInputText(text)}
          value={inputText}
        />
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Priority:</Text>
        <View style={styles.inputBox}>
          {priorityList.map((priorityOption, i) => (
            <ListItem key={i} onPress={() => setPriority(priorityOption)}>
              <Text style={[styles.priorityStyle, 
                priority === priorityOption ? styles.currentOption : {} ]}>{'!'.repeat(priorityOption)}</Text>
            </ListItem>
          ))}
        </View>
      </View>    
      <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Completed:</Text>
        <View style={styles.inputBox}>
          <CheckBox
            checked={checked} 
            onPress={() => {
              const newChecked = !checked;
              setChecked(newChecked);
            }}
          />
        </View>
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
          title={editMode ? "Save" : "Add Item"}
          onPress={()=>{
            item.text = inputText;
            item.priority = priority;
            item.checked = checked;
            if (editMode) {
              dataModel.updateItem(item);
            } else {
              dataModel.addItem(item); 
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
    paddingRight: 20,
    paddingBottom: 10
  },
  inputBox: {
    flex: 0.8,
    flexDirection: 'row'
  },
  priorityStyle: {
    fontSize: 18,
  },
  currentOption: {
    color:'red',
  },
  buttonArea: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'space-between',
    width: '70%',
  },
  button: {
    width: '40%'
  }
});

export default DetailsScreen;