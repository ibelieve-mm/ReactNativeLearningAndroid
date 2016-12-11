/**
 * Descriptions：Navigator组件的使用
 * <p>
 * Author：ChenME
 * Date：2016/11/13
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixeRatio,
    Navigator,
    ScrollView
} from 'react-native';

export default class ReactNativeLearningAndroid extends Component {

    render() {

        let defaultName = "List";
        let defaultComponent = List;

        return (
            <Navigator
                //初始化路由
                initialRoute={{name: defaultName, component: defaultComponent}}

                configureScene={
                    route=> {
                        return Navigator.SceneConfigs.FloatFromBottomAndroid;
                    }
                }

                renderScene={
                    (route, navigator)=> {
                        let Component = route.component;
                        return <Component{...route.params} navigator={navigator}/>
                    }
                }
            />

        );
    }
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 2,
            user: null
        };
    }

    _pressButton() {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                name: 'Detail',
                component: Detail,
                params: {
                    id: this.state.id,
                    getUser: user=> {
                        this.setState({
                                user: user
                            }
                        );
                    }
                }
            });
        }
    }

    render() {

        if (this.state.user) {
            return (
                <View>
                    <Text style={styles.list_item}>用户信息：{JSON.stringify(this.state.user)}</Text>
                </View>
            );
        } else {
            return (
                <ScrollView style={styles.flex}>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>豪华游轮济州岛3日游</Text>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>豪华游轮日本3日游</Text>
                    <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>豪华游轮马来西亚3日游</Text>
                </ScrollView>
            );
        }
    }
}

const USER_MODELS = {
    1: {name: "上官婉儿", age: 25},
    2: {name: "独孤求败", age: 45}
}

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        };
    }

    _pressButton() {
        const {navigator}=this.props;
        if (this.props.getUser) {
            let user = USER_MODELS[this.props.id];
            this.props.getUser(user);
        }

        if (navigator) {
            navigator.pop();
        }
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.list_item}>用户传递过来的id是：{this.state.id}</Text>
                <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>返回</Text>
            </ScrollView>
        );
    }

    componentDidMount() {
        this.setState({
            id: this.props.id
        });
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },

    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);