/**
 * Descriptions：ProgressBar组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/12/17
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid,
    ActivityIndicator
} from 'react-native';

import  TitleView from "../components/TitleView.js";

export default class ProgressBar_DemoUI extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.page}>
                <TitleView
                    instance={this}
                    title="ProgressBar组件"/>
                <View style={[styles.flex, styles.topState]}>

                    <ActivityIndicator color="#FF639B" size="small"/>
                    <ActivityIndicator color="#FA8919" size="large"/>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.3}/>
                    <ProgressBarAndroid />
                    <ProgressBarAndroid styleAttr="Small" indeterminate={false} progress={0.3}/>
                    <ProgressBarAndroid styleAttr="Large" indeterminate={false} progress={0.3}/>
                    <ProgressBarAndroid styleAttr="Inverse"/>
                    <ProgressBarAndroid styleAttr="SmallInverse"/>
                    <ProgressBarAndroid styleAttr="LargeInverse"/>

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