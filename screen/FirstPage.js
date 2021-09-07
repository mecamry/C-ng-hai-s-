import React, {Component} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View, Button, Text} from 'react-native';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  Sum = () => {
    var kq = parseInt(this.state.x) + parseInt(this.state.y);
    this.props.navigation.navigate('SecondPage', {result: kq});
   //alert(kq);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
            style={styles.textStyle}
            placeholder="Nhập số"
            keyboardType="numeric"
            value={this.state.x}
            onChangeText={x => this.setState({x})}
          />
          <TextInput
            style={styles.textStyle}
            placeholder="Nhập số"
            keyboardType="numeric"
            value={this.state.y}
            onChangeText={y => this.setState({y})}
          />
          <Button
            title="Sum"
            onPress={this.Sum}
            // onPress={() => this.props.navigation.navigate('SecondPage', {result: this.state.result})}
          />
          <Text>Kết quả: {this.Sum}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
  textStyle: {
    borderWidth: 1,
    borderRadius: 12,
    margin: 10,
  },
});
