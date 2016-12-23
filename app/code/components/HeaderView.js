/**
 * Descriptions：Text组件的使用
 * 模仿网易新闻
 *
 * Header组件
 * <p>
 * Author：ChenME
 * Date：2016/11/13
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

/**
 * 头部组件
 */
export default  class HeaderView extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>
                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text>有态度°</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    flex: {
        marginTop: 25,
        height: 50,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: '#EF2D36',
        alignItems: 'center',
    },

    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    font_1: {
        color: '#CD1D1C',
    },

    font_2: {
        color: '#FFFFFF',
        backgroundColor: '#CD1D1C',
    },
});