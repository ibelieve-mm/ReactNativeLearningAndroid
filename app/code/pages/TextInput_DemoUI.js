/**
 * Descriptions：TextInput组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/12/11
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio,
    ToastAndroid,
} from 'react-native';

var onePT = 1 / PixelRatio.get();

import  TitleView from "../components/TitleView.js";

export default class TextInput_DemoUI extends Component {

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.flex}>
                    <TitleView
                        instance={this}
                        title="TextInput"

                        backText="左侧按钮"
                        backAction={()=> {
                            ToastAndroid.show("左侧按钮被点击了", ToastAndroid.SHORT);
                        }}

                        rightMenuText="右侧返回"
                        rightMenuAction={()=> {
                            const {navigator}= this.props;
                            if (navigator) {
                                navigator.pop();
                            }
                        }}/>
                    <Search />
                </View>
            </View>
        );
    }
}

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: null,
        };
    }

    hide(val) {
        this.setState({
                show: false,
                value: val,
            }
        );
    }

    getValue(text) {
        this.setState({
            show: text.length > 0,
            value: text,
        });
    }

    render() {
        return (

            <View style={[styles.flex, styles.flexDirectionColumn]}>
                <View style={styles.flexDirection}>
                    <View style={[styles.flex, styles.input]}>
                        <TextInput
                            returnKeyType='search'
                            returnKeyLabel='搜索'
                            placeholder='请输入搜索内容'
                            placeholderTextColor='#999'
                            multiline={false}
                            numberOfLines={2}
                            autoFocus={true}
                            accessibilityLabel="I am the accessibility label for text input"
                            keyboardType='default'
                            editable={true}
                            maxLength={40}
                            defaultValue='我是默认值'
                            underlineColorAndroid='transparent'

                            value={this.state.value}
                            onChangeText={this.getValue.bind(this)}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search}>搜索</Text>
                    </View>
                </View>

                {this.state.show ?
                    <View style={styles.result}>
                        <Text onPress={this.hide.bind(this, this.state.value + '加东方QQ')}
                              style={styles.item} numberOfLines={1}>{this.state.value}加东方QQ</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '园街')}
                              style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
                        <Text onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')}
                              style={styles.item} numberOfLines={1}>80{this.state.value}综合商店</Text>
                        <Text onPress={this.hide.bind(this, this.state.value + '桃')}
                              style={styles.item} numberOfLines={1}>{this.state.value}桃</Text>
                        <Text onPress={this.hide.bind(this, '东方耀' + this.state.value)}
                              style={styles.item} numberOfLines={1}>东方耀{this.state.value}</Text>
                    </View>
                    : null
                }
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
    flexDirection: {
        flexDirection: 'row',
    },
    flexDirectionColumn: {
        flexDirection: 'column',
    },
    input: {
        height: 50,
        borderColor: '#FF639B',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    btn: {
        width: 45,
        marginLeft: -2,
        marginRight: 10,
        backgroundColor: '#FF639B',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    result: {
        marginTop: onePT,
        marginLeft: 18,
        marginRight: 5,
        height: 200,
    },
    item: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 10,
    },
});