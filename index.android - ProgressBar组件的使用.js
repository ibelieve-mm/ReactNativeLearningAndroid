/**
 * Descriptions：ProgressBar组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/12/17
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ProgressBarAndroid
} from 'react-native';


export default class ReactNativeLearningAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={[styles.flex, styles.topState]}>

                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.3}/>
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

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);