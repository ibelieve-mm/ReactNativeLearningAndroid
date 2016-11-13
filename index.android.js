/**
 * Descriptions：Navigator组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/11/13
 * Email：ibelieve1210@163.com
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ReactNativeLearningAndroid extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>
                    React Native页面——ChenME
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);