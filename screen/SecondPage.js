import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
export default class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {result: 0}
    };
    componentDidMount() {
        this.setState({result: this.props.route.params.result});
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>z
                <View style={styles.subContainer}>
                    <Text style={styles.textStyle}>{ this.state.result} </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subContainer: {
        flex: 1,
        padding: 12,
    },
    textStyle: {
        borderWidth: 1,
        width: 80,
        height: 50,
        margin: 20,
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
