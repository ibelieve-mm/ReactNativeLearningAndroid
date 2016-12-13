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
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class ReactNativeLearningAndroid extends Component {

    render() {
        return (
            <View style={styles.page}>
                <View style={[styles.flex, styles.topState]}>
                    <TouchableHighlight
                        onPress={this.show.bind(this, '欢迎学习React Native技术')}
                        underlayColor='#CCC'/*有触摸操作时显示出来的底层的颜色*/
                        activeOpacity={0.6}
                    >
                        <Text style={styles.item}>
                            欢迎学习React Native技术-TouchableHighlight
                        </Text>
                    </TouchableHighlight>

                    <TouchableOpacity
                        onPress={this.show.bind(this, '作者东方耀Q：3096239789')}
                        activeOpacity={0.7}/*被触摸操作激活时以多少不透明度显示（通常在0到1之间）*/
                    >
                        <Text style={styles.item}>
                            作者东方耀Q：3096239789-TouchableOpacity
                        </Text>
                    </TouchableOpacity>

                    <TouchableWithoutFeedback
                        onPress={this.show.bind(this, '作者东方耀Q：3096239789')}>
                        <View>
                            <Text style={styles.item}>
                                作者东方耀Q：3096239789-TouchableWithoutFeedback
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
            </View>
        );
    }

    show(txt) {
        alert(txt);
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

    item: {
        fontSize: 18,
        color: '#434343',
        marginLeft: 5,
        marginTop: 10,
    },
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);