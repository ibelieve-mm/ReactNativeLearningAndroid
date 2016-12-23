/**
 * Descriptions：通用的TitleView
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

export default class TitleView extends Component {

    render() {
        return (
            <View style={[styles.titleLayout]}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    /*this.props.instance获取到父控件的this实例*/
                    onPress={this.props.backAction ? this.props.backAction : this._goBack.bind(this.props.instance)}>
                    <View style={styles.backBtn}>
                        {/*如果返回按钮上面的文字在引用时被赋值了，则使用该值，否则使用默认值*/}
                        <Text style={styles.backTextCss}>{this.props.backText ?this.props.backText : "返回"}</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.titleText}>{this.props.title}</Text>

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.props.rightMenuAction}>
                    <View style={styles.rightBtn}>
                        <Text style={styles.backTextCss}>{this.props.rightMenuText}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 返回Action
     * @private
     */
    _goBack() {
        const {navigator}= this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}
const styles = StyleSheet.create({
    titleLayout: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        backgroundColor: "#ccc",
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "space-between",
    },
    backBtn: {
        paddingRight: 25,
        height: 60,
        alignItems: "center",
        flexDirection: "row",
    },
    backTextCss: {
        color: "#666",
        fontWeight: "normal",
        fontStyle: "normal",
        // fontWeight:"bold",
        // fontStyle:"italic",
    },
    titleText: {
        color: "#333",
        fontStyle: "normal",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 18,
    },
    rightBtn: {
        alignItems: "center",
        flexDirection: "row",
        height: 60,
        paddingLeft: 25,
        justifyContent: "flex-end",
    },
});