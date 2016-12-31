/**
 * Descriptions：网络请求
 * <p>
 * Author：ChenME
 * Date：2016/12/30
 * Email：ibelieve1210@163.com
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ToastAndroid,
} from "react-native";

import  TitleView from "../components/TitleView.js";

const Request_Url = "http://wthrcdn.etouch.cn/weather_mini?city=北京";

export default class NetWork_DemoUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            netResult: {},
            weathers: new ListView.DataSource({
                rowHasChanged: (row1, row2)=>row1 !== row2,
            }),
        };
    }

    render() {
        return (
            <View style={[styles.page, styles.flex]}>
                <TitleView
                    instance={this}
                    title="网络请求——天气Demo"
                />
                <Text style={styles.textStyleComm}> {this.state.netResult.city}</Text>
                <Text style={styles.textStyleComm}> 体感温度：{this.state.netResult.wendu}℃</Text>
                <Text style={styles.textStyleComm}> 感冒指数：{this.state.netResult.ganmao}</Text>

                <ListView
                    dataSource={this.state.weathers}
                    renderRow={this.renderWeather
                    }
                />
            </View>
        );
    }


    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(Request_Url)
            .then((response)=>response.json())
            .then((responseData)=> {
                var temp = responseData.data.forecast;

                ToastAndroid.show(temp[0].date, ToastAndroid.LONG);
                this.setState({
                    netResult: responseData.data,
                    weathers: this.state.weathers.cloneWithRows(responseData.data.forecast),
                });

            })
            .done();
    }


    renderWeather(weather) {
        return (
            <View style={styles.itemStyle}>

                <Text style={styles.textStyleComm}>时间：{weather.date}</Text>
                <Text style={styles.textStyleComm}>天气：{weather.type}</Text>
                <Text style={styles.textStyleComm}>气温：{weather.low + " ~ " + weather.high}</Text>
                <Text style={styles.textStyleComm}>风向：{weather.fengxiang}</Text>
                <Text style={styles.textStyleComm}>风级：{weather.fengli}</Text>
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

    textStyleComm: {
        fontSize: 20,
    },

    itemStyle: {
        borderBottomWidth: 1,
        borderColor: "#999",
    },
});