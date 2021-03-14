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
    act_props2:'ACT PROPS2',
   }
  }

  updateYear(){
    this.setState({
      year:2020,
      happy:true,
    })
  }
  updateProps(){
    this.setState({
      act_props2:"Change Value",
    })
  }
  
  render (){
    const {act_props2}=this.state
    let act_props='ACT PROPS'
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
      <Display book={"Start React Native"}/>
      <Display book={"Props test"}/>
      <Display book={act_props}/>
      <Display updateProp={()=>this.updateProps()} book={act_props2}/>
      <Display2 updateProp={()=>this.updateProps()} book={act_props2}/>
    </View>
    
    )
  }
}

class Display extends Component{
  render(){
    const {book,updateProp}=this.props
    return(
      <View>
        <Text onPress={updateProp}>{book}</Text>
      </View>
    )
  }
}

const Display2=(props)=>{
  const {book,updateBook}=props
  return(
    <View>
      <Text onPress={updateBook}>{book}</Text>
    </View>
  )
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
