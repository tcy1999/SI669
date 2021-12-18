import React, {useEffect, useState, useLayoutEffect} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Button, CheckBox, BottomSheet, ListItem } from 'react-native-elements';
import { MaterialIcons as Icon, Ionicons, AntDesign } from '@expo/vector-icons'; 
import { getDataModel } from './DataModel';

function HomeScreen({navigation}) {
  const [todoList, setTodoList] = useState([]);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [sortDesc, setSortDesc] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const dataModel = getDataModel();

 useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name="settings-sharp" size={24} color="black" onPress={setting}/>
      ),
    });
  }, [navigation]);

  useEffect(()=>{ 
    const listenerId = dataModel.addTodoListener(() => {
      let newTodoList = Array.from(dataModel.getTodoList());
      setTodoList(newTodoList);
    });
    return(() => {
      dataModel.removeTodoListener(listenerId);
    });
  }, []);

  useEffect(()=>{
    dataModel.subscribeToSnapshot(hideCompleted, sortDesc);
  }, [hideCompleted, sortDesc]);

  const setting = () => {
    setIsVisible(true);
  }
  
  const list = [
    {
      title: 'Settings',
      containerStyle: { backgroundColor: 'darkgrey' },
      titleStyle: { color: 'white'},
      button:  (<TouchableOpacity onPress={() => setIsVisible(false)} style={{'backgroundColor': '#007bff'}}>
      <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>)
    },
    { title: `${hideCompleted ? 'Show' : 'Hide'} Completed`,
      onPress: () => {
        const newHideCompleted = !hideCompleted;
        setHideCompleted(newHideCompleted);
      },
    },
    { title: `Sort Priority ${sortDesc ? 'Low to High': 'High to Low'}`,
      onPress: () => { 
        const newSortDesc = !sortDesc
        setSortDesc(newSortDesc);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
        >
        {list.map((l, i) => (
          <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
            <ListItem.Content style={styles.bottomSheetContent}>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              {l.button}
            </ListItem.Content>
          </ListItem>
        ))}
        </BottomSheet>
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={todoList} 
          renderItem={({item})=>{
            return (
              <View style={styles.listItem}>
                <CheckBox checked={item.checked} onPress={() => {
                  item.checked = !item.checked;
                  dataModel.updateItem(item);
                }}/>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Text style={styles.listItemPriority}>{'!'.repeat(item.priority)}</Text>
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
                      dataModel.deleteItem(item);
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
    flex: 0.65,
    fontSize: 18,
  },
  listItemPriority: {
    flex: 0.05,
    fontSize: 18,
  },
  listItemButtons: {
    flex: 0.2,
    flexDirection: 'row',
  },
  bottomSheetContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
