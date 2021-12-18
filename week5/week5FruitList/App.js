import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class FruitItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <Text>{this.props.type}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.fruit = [
      { type: 'apple', key: '1'},
      { type: 'banana', key: '2'},
      { type: 'grape', key: '3'},
      { type: 'pineapple', key: '4'},
      { type: 'mango', key: '5'},
      { type: 'lychee', key: '6'},
    ];
  }
  render() {
    return (
      <View style={styles.container}>
          <FlatList
            data={this.fruit}
            renderItem={({item}) => 
              <FruitItem type={item.type}/>
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    paddingTop: '25%',
    backgroundColor: 'grey', 
  },
  itemContainer: {
    flex: 1,
    margin: '5%',
    padding: '5%',
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  itemText: {
    fontSize: 44,
  }
});