import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyComponent extends Component {
  constructor(){
    super()
  this.state={
    year:2021,
    name:"Harry",
    colors:['blue'],
    happy:false,
   }
  }

  updateYear(){
    this.setState({
      year:2020,
      happy:true,
    })
  }
  
  render (){
    let leapyear=<Text>Happy New year!</Text>
    if (this.state.happy){
      leapyear=<Text>Hello world</Text>
    }
    return(
    <View style={styles.container}>
      <Text>My name is: {this.state.name}</Text>
      <Text onPress={()=>this.updateYear()}>The year is: {this.state.year}</Text>
      <Text>The color is: {this.state.colors[0]}</Text>
      { leapyear }
    </View>
    )
  }
}


export default MyComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
