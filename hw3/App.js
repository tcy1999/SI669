import React from 'react';
import { StyleSheet, Text, View,
      TextInput, Switch, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

/**
 * @param {string} text The string to reverse
 * @returns {string} The string, reversed
 */
function reverseText(text) {
  return text.split('').reverse().join('');
}

export default class classApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      reverseText: false,
      reverseColors: false,
      resultStyle: styles.resultTextLight,
      currentPassword: '',
      reEnteredPassword: '',
      onlyAlphaNum: false,
      upperLowerNum: false
    }
  }
  
  handleChangeText = (text) => {
    this.setState({currentInput: text});
  }
  
  handleReverseText = (value) => {
    this.setState({reverseText: value});
  }

  handleReverseColors = (value) => {
    this.setState({reverseColors: value});
  }

  handlePassword = (value) => {
    this.setState({
      currentPassword: value,
      onlyAlphaNum: /^[A-Za-z0-9]+$/.test(value),
      upperLowerNum: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)
    });
  }

  handleReEnterPassword = (value) => {
    this.setState({reEnteredPassword: value});
  }

  returnIcon = (condition) => {
    if (condition){
      return <AntDesign name="checkcircle" size={16} color="green"/>;
    }
    return <AntDesign name="closecircle" size={16} color="red"/>;
  }

  getAspectRatio = (img) => {
    const data = Image.resolveAssetSource(img);
    return data.width / data.height;
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.container}>
            <Image source={require('./spookytext.png')}
                style={[styles.logoImage, 
                {aspectRatio: this.getAspectRatio(require('./spookytext.png'))}]}/>
              <View style={styles.inputArea}>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Enter something:</Text>
                  <TextInput
                    style={styles.inputBox}
                    onChangeText={this.handleChangeText}
                    value={this.state.currentInput}
                  />
                </View>
              </View>
              <View style={styles.switchArea}>
                <View style={styles.labeledSwitch}>
                  <Text>Reverse text:</Text>
                  <Switch
                    value={this.state.reverseText}
                    onValueChange={this.handleReverseText}
                  />
                </View>
                <View style={styles.labeledSwitch}>
                  <Text>Reverse colors:</Text>
                  <Switch
                    value={this.state.reverseColors}
                    onValueChange={this.handleReverseColors}
                  />
                </View>
              </View>
              <View style={styles.resultArea}>
                <Text style={styles.resultLabel}>Result: </Text>
                <Text style={[this.state.resultStyle, 
                this.state.reverseColors ? styles.resultTextDark : {} ]}>
                  {this.state.reverseText? reverseText(this.state.currentInput): this.state.currentInput}
                </Text>
              </View>
              <View style={styles.inputArea}>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Enter password:</Text>
                  <TextInput
                    style={styles.inputBox}
                    onChangeText={this.handlePassword}
                    value={this.state.currentPassword}
                  />
                </View>
              </View>
              <View style={styles.inputArea}>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Re-enter password:</Text>
                  <TextInput
                    style={styles.inputBox}
                    onChangeText={this.handleReEnterPassword}
                    value={this.state.reEnteredPassword}
                  />
                </View>
              </View>
              <View style={styles.passwordArea}>
                <Text>Passwords must:</Text>
                <Text style={this.state.onlyAlphaNum? styles.passRulesGreen: styles.passRulesRed}>
                  {this.returnIcon(this.state.onlyAlphaNum)}
                  contain only letters and numbers
                </Text>
                <Text style={this.state.upperLowerNum? styles.passRulesGreen: styles.passRulesRed}>
                  {this.returnIcon(this.state.upperLowerNum)}
                  contain at least one upper case letter, lower case letter, and number
                </Text>
                <Text style={this.state.currentPassword === this.state.reEnteredPassword? styles.passRulesGreen: styles.passRulesRed}>
                  {this.returnIcon(this.state.currentPassword === this.state.reEnteredPassword)}
                  match
                </Text>
              </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '10%'
  },
  logoImage: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    height: undefined,
    resizeMode: 'contain'
  },
  inputArea: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  inputLabel: {
    flex: 0.4,
  },
  inputBox: {
    flex: 0.6,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    padding: 5,
    height: 40
  },
  switchArea: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  labeledSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  resultArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  resultLabel: {
    flex: 0.4
  },
  resultTextLight: {
    flex: 0.6,
    height: 40,
    lineHeight: 26,
    padding: 5,
    color: 'black',
    backgroundColor: 'orange',
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'black'
  },
  resultTextDark: {
    color: 'orange',
    backgroundColor: 'black',
    borderColor: 'orange'
  },
  passwordArea: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  },
  passRulesRed: {
    color: 'red'
  },
  passRulesGreen: {
    color: 'green'
  },
});
