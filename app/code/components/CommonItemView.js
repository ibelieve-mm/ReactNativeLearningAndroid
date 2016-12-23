/**
 * Descriptions：列表的Item（通用）
 * <p>
 * Author：ChenME
 * Date：2016/12/23
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export  default  class CommonItemView extends Component {
    render() {
        return (
            <View style={styles.itemLayout}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.props.itemClickAction}>
                    <Text style={styles.itemText}>{this.props.itemContentText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemLayout: {
        backgroundColor: "#FFF",
        flexDirection: "column",
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "center",
    },
    itemText: {
        color: "#333",
        fontSize: 16,
    },
});