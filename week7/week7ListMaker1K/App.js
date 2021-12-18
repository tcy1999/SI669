
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {text: 'Jim', key: '1'},
        {text: 'Jen', key: '2'},
        {text: 'Jia', key: '3'},
      ],
      inputValue: '',
      mode: 'add',
      editKey: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputBox}
            onChangeText={(value) => this.setState({inputValue: value})}
            value={this.state.inputValue}
          />
          <Button title={this.state.mode === 'add'? 'Add': 'Save'} onPress={() => {
            if(this.state.mode === 'add'){
              this.state.data.push({text: this.state.inputValue, key: '' + this.state.data.length+1});
            }
            else {
              let idx = this.state.data.findIndex((elem)=>elem.key === this.state.editKey);
              this.state.data[idx].text = this.state.inputValue;
              this.setState({
                mode: 'add',
                editKey: null
              })
            }
            this.setState({
              data: this.state.data,
              inputValue: ''
            });
          }}/>
        </View>
        <FlatList
          data = {this.state.data}
          renderItem = {({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={this.state.editKey === item.key? styles.highlight: []}>
                  {item.text}
                </Text>
                <Button title='Edit' onPress={() => {
                  this.setState({
                    inputValue: item.text,
                    mode: 'edit',
                    editKey: item.key
                  });
                }}/>
                <Button title='Delete' onPress={() => {
                  let idx = this.state.data.findIndex((elem)=>elem.key === item.key);
                  this.state.data.splice(idx, 1);
                  this.setState({data: this.state.data});
                }}/>
              </View>            
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '25%'
  },
  itemContainer: {
      alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    width: '50%',
    alignSelf: 'center'
  }, 
  inputRow: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    paddingBottom: '15%'
  },
  highlight: {
    color: 'red'
  }
});