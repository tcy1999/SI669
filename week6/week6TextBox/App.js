import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      displayText: '',
    };
  }
  render() {
    let {displayText} = this.state;
    return (
      <View style={styles.container}>
          <Text>{displayText}</Text>
          <TextInput style={styles.borderedInput} 
          placeholder="Type here!"
          onChangeText={(value) => this.setState({inputText: value})}/>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={this.updateText}>
            <Text>Save</Text>
          </TouchableOpacity>
      </View>
    )
  }

  updateText = () => {
    this.setState({
      displayText: this.state.inputText
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    marginTop: '5%',
    backgroundColor: 'pink',
    padding: '3%',
    borderRadius: 10,
  },
  borderedInput: {
    fontSize: 36,
    borderColor: 'grey',
    borderWidth: 2
  }
});