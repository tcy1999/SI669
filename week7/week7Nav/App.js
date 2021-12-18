import * as React from 'react';
import { Button, View, Text, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log("HomeScreen did mount");
    this.timer = setInterval(()=>{
      this.setState({
        counter: this.state.counter + 1
      })}, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', 
                     justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{this.state.counter}</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Eighty-six',
          })}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false
    }
  }

  componentDidMount() {
    console.log("DetailsScreen did mount");
    this.timer = setInterval(()=>{
      this.setState({
        switchValue: !this.state.switchValue
      })}, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { navigation } = this.props;
    const { itemId, otherParam } = this.props.route.params;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', 
                     justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {itemId}</Text>
        <Text>otherParam: {otherParam}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Switch value={this.state.switchValue}></Switch>
      </View>
    );
  }
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;