import React from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
  }
  render() {
    let {firstName, lastName} = this.state;
    return (
      <View style={styles.container}>
        <Text>
          Hello, {firstName} {lastName}!
        </Text>
        <View>
          <Text>First Name: </Text>
          <TextInput
            placeholder="enter first name"
            onChangeText={textValue => this.setState({firstName: textValue})}
          />
        </View>
        <View>
          <Text>Last Name: </Text>
          <TextInput
            placeholder="enter last name"
            onChangeText={textValue => this.setState({lastName: textValue})}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});