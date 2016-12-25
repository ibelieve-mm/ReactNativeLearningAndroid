/**
 * Descriptions：Picker组件的使用
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
    Picker
} from 'react-native';

import  TitleView from "../components/TitleView.js";

export default class Picker_DemoUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null
        };
    }

    render() {
        return (
            <View style={styles.page}>
                <TitleView
                    instance={this}
                    title="Picker组件"/>
                <View style={[styles.flex, styles.topState]}>

                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={lang=>this.setState({language: lang})}
                        mode="dropdown"  /*下拉模式*/
                        /*mode="dialog"*/  /*对话框模式*/
                        style={{color: '#f00'}}
                    >

                        <Picker.Item label="Java" value="Java"/>
                        <Picker.Item label="JavaScript" value="JavaScript"/>
                        <Picker.Item label="C++" value="C++"/>
                        <Picker.Item label="PHP" value="PHP"/>
                    </Picker>

                    <Text>{this.state.language}</Text>

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