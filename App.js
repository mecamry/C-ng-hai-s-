import React, {Component} from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  Sum = () => {
    let x1 = parseInt(this.state.x);
    let y1 = parseInt(this.state.y);
    let result = x1 + y1;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <View style={styles.view1}>
            <TextInput
              style={styles.textInput}
              placeholder="nhap gia tri"
              keyboardType="numeric"
              onChangeText={x => this.setState({x})}
            />
          </View>
          <View style={styles.view1}>
            <TextInput
              style={styles.textInput}
              placeholder="nhap gia tri"
              keyboardType="numeric"
              onChangeText={y => this.setState({y})}
            />
          </View>
          <Button
            title="sum"
            onPress={() => {
              this.props.navigation.navigate('sum');
            }}
          />
        </View>
        <View style={styles.subcontainer} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    width: 250,
    alignItems: 'center',
    padding: 10,
  },
  view1: {
    padding: 10,
  },
});
