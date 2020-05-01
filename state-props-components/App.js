import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import CustomButton from "./components/CustomButton"
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      candyCount: 0
    }
  }

  addCandy = () => {
  this.setState((prevState) => ({'candyCount': prevState.candyCount+1 })) // prevState can be used 

    //callback functions: incase you want to add multiple candies in one go, use call back as setState is limited and is not synchronous
    //React baches setState to improve performance
    // this.setState( { 'candyCount': this.state.candyCount+1 }, 
    // () => {this.setState( { 'candyCount': this.state.candyCount+1},
    //    () => {this.setState( { 'candyCount': this.state.candyCount+1})})},
    // )

  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.custTitle}>{ this.state.candyCount} candies</Text>
        <CustomButton addMyCandy={this.addCandy}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  custTitle: {
    textAlign:'center',
    fontSize: 30,
    marginBottom: 20,
  }
});
