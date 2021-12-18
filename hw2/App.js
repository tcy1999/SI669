import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MainApp extends React.Component {

  constructor() {
    super();

    this.helloPhrases = [
      'Hello World!',
      'Hola Mundo!',
      'Hallo Welt!',
      '你好，世界!',
      '안녕 지구촌!', 
      'नमस्ते विश्व!'
    ];

    this.state = { textNum: 0 };
  }

  componentDidMount(){
    setInterval(() => {
        this.setState( prevState => ({textNum: (prevState.textNum+1)%6}));
    },1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <View style={styles.view11}>
            <Text style={styles.label1}>{this.helloPhrases[this.state.textNum]}</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <View style={styles.view21}>
            <Text style={styles.label2}>{this.helloPhrases[4]}</Text>
          </View>
          <View style={styles.view22}>
            <Text style={styles.label3}>{this.helloPhrases[3]}</Text>
          </View>
        </View>
        <View style={styles.view3}>
          <View style={styles.view31}>
            <Text style={styles.label4}>{this.helloPhrases[5]}</Text>
          </View>
          <View style={styles.view32}>
            <Text style={styles.label5}>{this.helloPhrases[1]}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  view1: {
    flex: 0.3,
    backgroundColor: 'grey',
    width: '90%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  view11: {
    flex: 0.8,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
  },
  label1 : {
    fontSize: 44,
    color: 'pink',
  }, 
  view2: {
    flex: 0.2,
    backgroundColor: 'gray',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
  view21: {
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    height: '60%',
  },
  view22: {
    flex: 0.4,
    backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    height: '60%',
  },
  label2 : {
    fontSize: 20,
    color: 'green',
  }, 
  label3 : {
    fontSize: 20,
    color: 'white',
  }, 
  view3: {
    flex: 0.1,
    width: '90%',
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
  view31: {
    flex: 0.4,
    backgroundColor: 'purple',
    justifyContent: "center",
    alignItems: "center",
    height: '40%',
  },
  view32: {
    flex: 0.4,
    backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
    height: '40%',
  },
  label4 : {
    fontSize: 18,
    color: 'yellow',
  }, 
  label5 : {
    fontSize: 18,
    color: 'purple',
  }, 
});

export default MainApp;
