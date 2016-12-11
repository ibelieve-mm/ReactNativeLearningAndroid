/**
 * Descriptions：TextInput组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/12/11
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class ReactNativeLearningAndroid extends Component {

    render() {
        return (
            <View style={[styles.flex, styles.topState]}>
                <Search />

            </View>
        );
    }
}

class Search extends Component {
    render() {
        return (
            <View style={[styles.flex, styles.flexDirection]}>
                <View style={[styles.flex, styles.input]}>
                    <TextInput returnKeyType='search' returnKeyLabel='搜索'/>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.search}>搜索</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

    flexDirection: {
        flexDirection: 'row',
    },

    topState: {
        marginTop: 25,
    },

    input: {
        height: 50,
        borderColor: '#ff639b',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    btn: {
        width: 45,
        marginLeft: -2,
        marginRight: 10,
        backgroundColor: '#23BEFF',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    search: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);