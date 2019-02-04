import React, {Component} from 'react';
import { connect } from 'react-redux'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Root extends Component {
  onPress = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }
  render() {
    const { count } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{count}</Text>
        <TouchableOpacity onPress={this.onPress} style={styles.button}>
          <Text style={{textAlign:'center'}}>INCREMENT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapStateToProps = ({counter}) => ({count: counter.value})
export default connect(mapStateToProps)(Root)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#BBBBBB',
    height: 40,
    width: 90,
    borderRadius: 15
  },
});
