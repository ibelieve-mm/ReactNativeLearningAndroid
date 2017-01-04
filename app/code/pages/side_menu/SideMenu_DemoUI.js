/**
 * Descriptions：第三方控件SideMenu Demo
 * <p>
 * Author：ChenME
 * Date：2017/1/4
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import  TitleView from "../../components/TitleView.js";
import Menu from './Menu.js';

export default class SideMenu_DemoUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem:"右划展开侧边菜单栏",
        };
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;
        return (
            <SideMenu menu={menu}>
                <View style={styles.page}>
                    <TitleView
                        instance={this}
                        title="SideMenu组件"/>
                    <View style={[styles.flex]}>
                        <Text> {this.state.selectedItem}</Text>
                    </View>
                </View>
            </SideMenu>

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