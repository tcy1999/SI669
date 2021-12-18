import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox, Input } from 'react-native-elements';
import { MaterialIcons as Icon } from '@expo/vector-icons'; 
import { getDataModel } from './DataModel';

function HomeScreen({navigation}) {
  const dataModel = getDataModel();
  const [todoList, setTodoList] = useState(dataModel.getTodoListCopy());

  useEffect(()=>{
    dataModel.subscribeToUpdates(()=>{
      setTodoList(dataModel.getTodoListCopy());
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={todoList}
          renderItem={({item})=>{
            return (
            <View style={styles.listItem}>
              <CheckBox/>
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
