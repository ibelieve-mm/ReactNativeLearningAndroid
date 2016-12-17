/**
 * Descriptions：Picker组件的使用
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
    Picker
} from 'react-native';


export default class ReactNativeLearningAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null
        };
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={[styles.flex, styles.topState]}>

                    <Picker
                        selectedValue={this.state.language}
                        onValueChange={lang=>this.setState({language: lang})}
                        mode="dropdown"  /*下拉模式*/
                        /*mode="dialog"*/  /*对话框模式*/
                        style={{color: '#f00'}}
                    >

                        <Picker.Item label="Java" value="Java"/>
                        <Picker.Item label="JavaScript" value="JavaScript"/>
                        <Picker.Item label="C++" value="C++"/>
                        <Picker.Item label="PHP" value="PHP"/>
                    </Picker>

                    <Text>{this.state.language}</Text>

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

    // btn: {
    //     width: 100,
    //     height: 30,
    //     borderColor: '#0089FF',
    //     borderWidth: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 3,
    // },
    //
    // btns: {
    //     flexDirection: 'row',
    //     marginTop: 20,
    //     justifyContent: 'center',
    // },
    //
    // img: {
    //     width: 300,
    //     height: 200,
    //     borderRadius: 8,
    // },
    //
    //
    // image: {
    //     borderWidth: 1,
    //     width: 302,
    //     height: 202,
    //     borderRadius: 8,
    //     borderColor: '#ccc',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
});

AppRegistry.registerComponent('ReactNativeLearningAndroid', () => ReactNativeLearningAndroid);