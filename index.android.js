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
    Navigator,
    Image,
    ScrollView,
} from 'react-native';

import CommonItemView from "./app/code/components/CommonItemView.js";
import ImageDemo from "./app/code/pages/Image_DemoUI.js";
import TextInputDemo from "./app/code/pages/TextInput_DemoUI.js";
import TouchableDemo from "./app/code/pages/Touchable_DemoUI.js";
import BoxModel from "./app/code/pages/BoxModelDemoPage.js";
import TextDemo from "./app/code/pages/Text_DemoUI.js";
import ViewDemo from "./app/code/pages/View_DemoUI.js";
import DrawerLayoutAndroidDemo from "./app/code/pages/DrawerLayoutAndroid_DemoUI.js";
import PickerDemo from "./app/code/pages/Picker_DemoUI.js";
import ProgressBarDemo from "./app/code/pages/ProgressBar_DemoUI.js";
import ViewPagerAndroidDemo from "./app/code/pages/ViewPagerAndroid_DemoUI.js";
import SwiperDemo from "./app/code/pages/ReactNativeSwiper_3rdDemo.js";
import SwiperDemo2 from "./app/code/pages/swiper/SwiperNumber/SwiperNumber.js";
import LoadMinimalDemo from "./app/code/pages/swiper/LoadMinimal/LoadMinimalDemo.js";


export default class ReactNativeLearningAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let defaultName = "WelcomeUI";
        let defaultComponent = WelcomeUI;
        return (
            <Navigator
                initialRoute={{name: defaultName, component: defaultComponent}}
                //配置场景
                configureScene={
                    route => {
                        //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                }
                renderScene={
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }/>
        );
    }
}

class WelcomeUI extends Component {

    _toTextInputUIPage = ()=> {
        this._toNextPage("TextInputDemo", TextInputDemo);
    };
    _toImageUIPage = ()=> {
        this._toNextPage("ImageDemo", ImageDemo);
    };
    _toTouchableUIPage = ()=> {
        this._toNextPage("TouchableDemo", TouchableDemo);
    };
    _toBoxModelPage = ()=> {
        this._toNextPage("BoxModel", BoxModel);
    };
    _toTextDemoPage = ()=> {
        this._toNextPage("TextDemo", TextDemo);
    };
    _toViewDemoPage = ()=> {
        this._toNextPage("ViewDemo", ViewDemo);
    };
    _toDrawerLayoutAndroidDemoPage = ()=> {
        this._toNextPage("DrawerLayoutAndroidDemo", DrawerLayoutAndroidDemo);
    };
    _toPickerDemoPage = ()=> {
        this._toNextPage("PickerDemo", PickerDemo);
    };
    _toProgressBarDemoPage = ()=> {
        this._toNextPage("ProgressBarDemo", ProgressBarDemo);
    };
    _toViewPagerAndroidDemoPage = ()=> {
        this._toNextPage("ViewPagerAndroidDemo", ViewPagerAndroidDemo);
    };
    _toSwiperDemoPage = ()=> {
        this._toNextPage("SwiperDemo", SwiperDemo);
    };
    _toSwiperDemo2Page = ()=> {
        this._toNextPage("SwiperDemo2", SwiperDemo2);
    };
    _toLoadMinimalDemoPage = ()=> {
        this._toNextPage("LoadMinimalDemo", LoadMinimalDemo);
    };

    _toNextPage = (name, component)=> {
        const {navigator} =this.props;
        if (navigator) {
            navigator.push({
                name: name,
                component: component,
            });
        }
    };

    render() {
        return (
            <View style={styles.page}>
                <ScrollView style={[styles.flex, styles.topState]}>
                    <CommonItemView itemContentText="TextInput组件Demo"
                                    itemClickAction={this._toTextInputUIPage}/>

                    <CommonItemView itemContentText="Image组件Demo"
                                    itemClickAction={this._toImageUIPage}/>

                    <CommonItemView itemContentText="Touchable组件Demo"
                                    itemClickAction={this._toTouchableUIPage}/>

                    <CommonItemView itemContentText="盒子模型展示"
                                    itemClickAction={this._toBoxModelPage}/>

                    <CommonItemView itemContentText="Text组件Demo"
                                    itemClickAction={this._toTextDemoPage}/>

                    <CommonItemView itemContentText="View组件Demo"
                                    itemClickAction={this._toViewDemoPage}/>

                    <CommonItemView itemContentText="DrawerLayoutAndroid组件Demo"
                                    itemClickAction={this._toDrawerLayoutAndroidDemoPage}/>

                    <CommonItemView itemContentText="Picker组件Demo"
                                    itemClickAction={this._toPickerDemoPage}/>

                    <CommonItemView itemContentText="ProgressBar组件Demo"
                                    itemClickAction={this._toProgressBarDemoPage}/>

                    <CommonItemView itemContentText="ViewPagerAndroid组件Demo"
                                    itemClickAction={this._toViewPagerAndroidDemoPage}/>

                    <CommonItemView itemContentText="第三方组件Swiper Demo"
                                    itemClickAction={this._toSwiperDemoPage}/>

                    <CommonItemView itemContentText="第三方组件Swiper Demo2"
                                    itemClickAction={this._toSwiperDemo2Page}/>

                    <CommonItemView itemContentText="第三方组件Swiper Demo3"
                                    itemClickAction={this._toLoadMinimalDemoPage}/>

                </ScrollView>
            </View>
        );
    };
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