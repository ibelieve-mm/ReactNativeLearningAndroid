/**
 * Descriptions：DrawerLayoutAndroid组件的使用
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
    DrawerLayoutAndroid
} from 'react-native';

import  TitleView from "../components/TitleView.js";

export default class DrawerLayoutAndroid_DemoUI extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        var navigationView = (
            <View style={[styles.drawer,styles.flex]}>
                <View style={[styles.flex, styles.topState]}>
                    <Text>我是抽屉</Text>
                </View>
            </View>
        );

        return (

            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={()=>navigationView}
            >


                <View style={styles.page}>
                    <TitleView
                    instance={this}
                    title="DrawerLayoutAndroid组件"/>
                    <View style={[styles.flex, styles.topState]}>

                        <Text>我是主界面</Text>

                    </View>
                </View>
            </DrawerLayoutAndroid>

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

    drawer: {
        backgroundColor: '#AA6392'
    }
});