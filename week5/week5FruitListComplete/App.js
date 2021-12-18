import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.fruit = [
      { type: 'apple', key: '1'},
      { type: 'banana', key: '2'},
      { type: 'grape', key: '3'},
      { type: 'pineapple', key: '4'},
    ];
  }

  render() {
    return (
      <View style={styles.container1}>
        <View>
          <FlatList
            data={this.fruit}
            renderItem={({item}) => 
              <View>
                <Text>{item.type}</Text>
              </View>
            }
            style={styles.list}
          />
        </View>
      </View>
    );
  }
}

export class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.fruit = [
      { type: 'apple', key: '1'},
      { type: 'banana', key: '2'},
      { type: 'grape', key: '3'},
      { type: 'pineapple', key: '4'},
    ];
  }

  render() {
    return (
        <View style={styles.container2}>
          <FlatList
            data={this.fruit}
            renderItem={({item}) => 
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.type}</Text>
              </View>
            }
          />
        </View>
  );
  }
}

export default class App3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [
        { type: 'apple', key: '1'},
        { type: 'banana', key: '2'},
        { type: 'grape', key: '3'},
        { type: 'pineapple', key: '4'},
        { type: 'mango', key: '5'},
        { type: 'lychee', key: '6'},
      ]
    }
  }

  render() {
    return (
        <View style={styles.container2}>
          <FlatList
            data={this.state.fruit}
            renderItem={({item}) => 
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.type}</Text>
              </View>
            }
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  container2: {
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