/**
 * Descriptions：View的使用
 * <p>
 * Author：ChenME
 * Date：2016/11/13
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

export default class ReactNativeLearningAndroid extends Component {
    render() {
        return (
            <View style={styles.flex}>

                <View style={styles.container}>

                    <View style={[styles.item, styles.center]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>

                    <View style={[styles.item, styles.lineLeft]}>

                        <View style={[styles.flex, styles.center, styles.lineBottom]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>

                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>特惠酒店</Text>
                        </View>
                    </View>

                    <View style={[styles.item, styles.lineLeft]}>

                        <View style={[styles.flex, styles.center, styles.lineBottom]}>
                            <Text style={styles.font}>团购</Text>
                        </View>

                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>客栈，公寓</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 84,
        marginTop: 200,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: '#FF0067',
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
    },

    item: {
        flex: 1,
        height: 80,
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    flex: {
        flex: 1,
    },

    font: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    lineLeft: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderColor: '#FFFFFF',
    },

    lineBottom: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#FFFFFF'
    },
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);