import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SecondPage from '../screen/SecondPage';
import FirstPage from '../screen/FirstPage';

const Stack = createStackNavigator();
export default class NavigationStack extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen
              name="FirstPage"
              component={FirstPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SecondPage"
              component={SecondPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
