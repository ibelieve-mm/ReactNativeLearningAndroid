/**
 * Descriptions：Alert
 * <p>
 * Author：ChenME
 * Date：2016/12/29
 * Email：ibelieve1210@163.com
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
    ToastAndroid,
} from "react-native";

import TitleView from "../components/TitleView.js";

const alertTitle = "标题";
const alertMessage = "内容";

export default class Alert_DemoUI extends Component {
    render() {
        return (
            <View style={styles.page}>
                <TitleView
                    instance={this}
                    title="Alert演示"/>
                <View style={[styles.flex, styles.topState]}>

                    <TouchableHighlight style={styles.wrapper}
                                        onPress={() => Alert.alert(
                                            alertTitle,
                                            alertMessage,
                                        )}>
                        <View style={styles.button}>
                            <Text>Alert with message and default button</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.wrapper}
                                        onPress={() => Alert.alert(
                                            alertTitle,
                                            alertMessage,
                                            [
                                                {
                                                    text: '1st',
                                                    onPress: () => ToastAndroid.show("1st", ToastAndroid.SHORT)
                                                },
                                                {
                                                    text: '2nd',
                                                    onPress: () => ToastAndroid.show("2nd", ToastAndroid.SHORT)
                                                },
                                                {
                                                    text: '3rd',
                                                    onPress: () => ToastAndroid.show("3rd", ToastAndroid.SHORT)
                                                },
                                                {
                                                    text: '4th',
                                                    onPress: () => ToastAndroid.show("4th", ToastAndroid.SHORT)
                                                },
                                            ]
                                        )}>
                        <View style={styles.button}>
                            <Text>Alert with three buttons</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.wrapper}
                                        onPress={() => Alert.alert(
                                            alertTitle,
                                            alertMessage,
                                            '..............'.split('').map((dot, index) => ({
                                                text: '按钮 ' + index,
                                                onPress: () => ToastAndroid.show("点击" + index, ToastAndroid.SHORT)
                                            }))
                                        )}>
                        <View style={styles.button}>
                            <Text>Alert with too many buttons</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ddd'
    },

    flex: {
        flex: 1,
    },

    topState: {
        marginTop: 25,
    },

    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});