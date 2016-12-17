/**
 * Descriptions：TextInput组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/12/11
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableHighlight,
    Image
} from 'react-native';

const onePT = 1 / PixelRatio.get();

var imgs = [
    'http://pic10.nipic.com/20101103/5063545_000227976000_2.jpg',
    'http://img1.3lian.com/2015/w7/98/d/23.jpg',
    'http://pic63.nipic.com/file/20150328/9448607_153955535000_2.jpg',
    'http://h.hiphotos.baidu.com/zhidao/pic/item/e824b899a9014c0869f80ddd0d7b02087af4f482.jpg'
];

export default class ReactNativeLearningAndroid extends Component {

    render() {
        return (
            <View style={styles.page}>
                <View style={[styles.flex, styles.topState]}>
                    <MyImage imgs={imgs}/>
                </View>
            </View>
        );
    }

    show(txt) {
        alert(txt);
    }
}

class MyImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imgs: this.props.imgs,
        };
    }

    render() {
        return (
            <View style={[styles.flex, {alignItems: 'center'}]}>
                <View style={styles.image}>
                    <Image style={styles.img}
                           resizeMode='cover'
                           source={require('./src/imgs/pet3.png')}/>
                    {/*source={{uri: this.state.imgs[this.state.count]}}/>*/}
                </View>

                <View style={styles.btns}>
                    <TouchableHighlight
                        underlayColor='#ccc'
                        activeOpacity={0.6}
                        onPress={this.goPreview.bind(this)}>
                        <View style={styles.btn}>
                            <Text>上一张:{this.state.count}</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor='#ccc'
                        activeOpacity={0.6}
                        onPress={this.goNext.bind(this)}>
                        <View style={styles.btn}>
                            <Text>下一张:{this.state.count}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    goPreview() {
        var count = this.state.count;
        if (count > 0) {
            count--;
            this.setState({
                count: count
            });
        }
    }

    goNext() {
        var count = this.state.count;
        if (count < this.state.imgs.length - 1) {
            count++;
            this.setState({
                count: count
            });
        }
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

    btn: {
        width: 100,
        height: 30,
        borderColor: '#0089FF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },

    btns: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },

    img: {
        width: 300,
        height: 200,
        borderRadius: 8,
    },


    image: {
        borderWidth: 1,
        width: 302,
        height: 202,
        borderRadius: 8,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);