import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getISchools } from './iSchoolData';
import { shuffleArray } from './Shuffle';

class ISchoolItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.ischoolRankContainer}>{this.props.ranking}</Text>
        <View style={styles.ischoolNameContainer}>
          <Text style={styles.ischoolUniv} numberOfLines={1}>{this.props.univ}</Text>
          <Text style={styles.ischool} numberOfLines={1}>{this.props.school}</Text>
        </View>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTime: (new Date()).toLocaleString('en-US'),
      ischools: this.shuffleIschools()
    }
  }

  shuffleIschools = () => {
    let ischoolArray = getISchools();
    let idx = ischoolArray.findIndex((elem)=> elem.key === 'University of Michigan: School of Information');
    const temp = ischoolArray[idx];
    ischoolArray[idx] = ischoolArray[0];
    ischoolArray[0] = temp;
    ischoolArray = shuffleArray(ischoolArray.slice(1));
    ischoolArray.unshift(temp);
    for (let i = 0; i < ischoolArray.length; i++) {
      ischoolArray[i].ranking = i + 1;
    }   
    return ischoolArray;
  }

  handleButton = () => {
    this.setState({
      updatedTime: (new Date()).toLocaleString('en-US'),
      ischools: this.shuffleIschools()
    });
  }

  render() {
    let {updatedTime, ischools} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Text style={styles.title}>iSchool Rankings</Text>
            <Text style={styles.updated}>Updated: {updatedTime}</Text>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity onPress={this.handleButton} style={styles.refresh}>
              <Ionicons name="ios-refresh" size={36} color="#002cdd"/>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={ischools}
          renderItem={({item}) => 
            <ISchoolItem ranking={item.ranking} univ={item.univ} school={item.school}/>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#263450',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  leftHeader: {
    flex: 0.8
  },
  rightHeader:{
    flex: 0.2
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  updated: {
    fontSize: 18,
    color: 'lightgrey'
  },
  refresh: {
    backgroundColor: '#7fa7b8',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginLeft: 10
  },
  ischoolRankContainer: {
    flex: 0.1,
    color: 'purple',
    fontSize: 30,
  },
  ischoolNameContainer: {
    flex: 0.9
  },
  ischoolUniv: {
    flex: 1,
    color: 'navy',
    fontSize: 18,
  },
  ischool: {
    flex: 1,
    color: 'grey'
  },
});
