/**
 * Descriptions：ViewPagerAndroid组件的使用
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
    ViewPagerAndroid
} from 'react-native';


export default class ReactNativeLearningAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (

            <ViewPagerAndroid
                initialPage={0}
                style={styles.flex}
            >

                <View style={styles.page}>
                    <View style={[styles.flex, styles.center]}>

                        <Text>页面一</Text>

                    </View>
                </View>

                <View style={[styles.page, {backgroundColor: "#AA639B"}]}>
                    <View style={[styles.flex, styles.center]}>

                        <Text style={{fontSize: 20, fontWeight: "bold"}}>页面二</Text>

                    </View>
                </View>

                <View style={styles.page}>
                    <View style={[styles.flex, styles.center]}>

                        <Text>页面三</Text>

                    </View>
                </View>
            </ViewPagerAndroid>
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

    center: {
        justifyContent: "center",
        alignItems: "center"
    }
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);