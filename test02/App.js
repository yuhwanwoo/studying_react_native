import { StatusBar } from 'expo-status-bar';
import React, { Component,GetDerivedStateFromProps, version } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,} from 'react-native';

// 생명주기 메서드 예시

export default class MyComponent extends Component{
  state={
    userLoggedIn: false,
  }
  static GetDerivedStateFromProps(nextProps, nextState){
    if(nextProps.user.authenticated){
      return{
        userLoggedIn:true
      }
    }
    return null
  }
  render(){
    return(
      <View></View>
    );
  }
}

class TestComponent extends Component{
  constructor(){
    super()
    this.state={loading:true, data:{}}
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading:false,
      })
    },2000)
  }
  render(){
    return(
    <View></View>
    )
  }
}


class Test01Component extends Component{
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.name !== this.props.name){
      return true
    }
    return false
  }
  render(){
    return <View></View>
  }
}

class Test02Component extends Component{
  componentDidUpdate(preProps, prevState){
    if(prevState.showToggled === this.state.showToggled){
      this.setState({
        showToggled: !showToggled
      })
    }
  }
  render(){
    return <View></View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
