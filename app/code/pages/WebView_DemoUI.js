/**
 * Descriptions：WebVIew的使用
 * <p>
 * Author：ChenME
 * Date：2017/1/2
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';

import Dimensions from "Dimensions";

import  TitleView from "../components/TitleView.js";


const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height - 60;
const WebUrl = "http://www.paigekuaiyun.com/page/about.html";
// const WebUrl = "http://www.paigekuaiyun.com/page/applink/price.html";
// const WebUrl = "http://www..baidu.com";
const HTML = '<div><image src="http://upload.jianshu.io/users/upload_avatars/1135454/5cc60c8771ee.jpeg?imageMogr/thumbnail/90x90/quality/100"';

export default class WebView_DemoUI extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.page}>
                <TitleView
                    instance={this}
                    title="WebView组件"/>
                <View style={[styles.flex]}>
                    <WebView
                        style={{height: WindowHeight, width: WindowWidth}}
                        source={{uri: WebUrl}}
                        startInLoadingState={true}
                    />
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
});