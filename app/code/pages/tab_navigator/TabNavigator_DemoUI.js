/**
 * Descriptions：TabNavigator第三方控件Demo
 * <p>
 * Author：ChenME
 * Date：2017/1/3
 * Email：ibelieve1210@163.com
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import  TitleView from "../../components/TitleView.js";

export default class TabNavigator_DemoUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }


    render() {
        var homeView = (<View style={[styles.flex, {backgroundColor: '#F04'}]}>
            <Text>我是主页</Text>
        </View>);

        var messageView = (<View style={[styles.flex, {backgroundColor: '#FF639B'}]}>
            <Text>我是消息页面</Text>
        </View>);

        return (
            <View style={styles.page}>
                <TitleView
                    instance={this}
                    title="TabNavigator组件"/>
                <View style={[styles.flex]}>

                    <TabNavigator tabBarStyle={{height: 50, overflow: 'hidden'}}>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title="主页"
                            renderIcon={() => <Image style={styles.tabImgStyle}
                                                     source={require('../../../imgs/all.png')}/>}
                            renderSelectedIcon={() => <Image style={styles.tabImgStyle}
                                                             source={require('../../../imgs/all_green.png')}/>}
                            badgeText="10"
                            onPress={() => this.setState({selectedTab: 'home'})}>
                            {homeView}
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'message'}
                            title="消息"
                            renderIcon={() => <Image style={styles.tabImgStyle}
                                                     source={require('../../../imgs/comments.png')}/>}
                            renderSelectedIcon={
                                () => <Image style={styles.tabImgStyle}
                                             source={require('../../../imgs/comments_green.png')}
                                />}
                            renderBadge={()=><Text>你好</Text>}
                            onPress={() => this.setState({selectedTab: 'message'})}>
                            {messageView}
                        </TabNavigator.Item>
                    </TabNavigator>
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

    tabImgStyle: {
        width: 16,
        height: 16,
    },
});