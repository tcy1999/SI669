import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, Switch } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons'; 
import { getDataModel } from './DataModel';

function HomeScreen({navigation}) {
  const dataModel = getDataModel();
  const [todoList, setTodoList] = useState(dataModel.getTodoListCopy());
  const [switchValue, setSwitchValue] = useState(false);

  useEffect(()=>{
    dataModel.subscribeToUpdates(()=>{
      setTodoList(dataModel.getTodoListCopy());
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Switch value={switchValue} style={{marginRight: 20}} onValueChange={setSwitchValue}/>
          <Text style={styles.listItemText}>Show Completed Items</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={todoList} 
          renderItem={({item})=>{
            if(switchValue && item.checked) {
              return;
            }
            return (
              <View style={styles.listItem}>
                <CheckBox checked={item.checked} onPress={() => 
                  dataModel.checkItem(item.key)}/>
                <Text style={styles.listItemText}>{item.text}</Text>
                <View style={styles.listItemButtons}>
                  <Button
                    icon={<Icon name="edit" size={24} color="darkgrey"/>}
                    type="clear"
                    onPress={()=>{
                      navigation.navigate('Details', {item: item});
                    }}
                  />
                  <Button
                    icon={<Icon name="delete" size={24} color="darkgrey"/>}
                    type="clear"
                    onPress={()=>{
                      dataModel.deleteItem(item.key);
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>

      <Button
        title="Add Item"
        onPress={()=>{
          navigation.navigate("Details");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flex: 0.5,
    padding: 30,
    width: '100%',
  },
  listContentContainer: {
    justifyContent: 'flex-start',
  },
  listItem: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5
  }, 
  listItemText: {
    flex: 0.7,
    fontSize: 18
  },
  listItemButtons: {
    flex: 0.2,
    flexDirection: 'row',
  }
});

export default HomeScreen;