/**
 * Descriptions：ListView
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
} from "react-native";

import  TitleView from "../components/TitleView.js";


export default class ListView_DemoUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=>row1 !== row2,
            }),
        };
    }

    render() {
        return (
            <View style={[styles.page, styles.flex]}>
                <TitleView
                    instance={this}
                    title="ListView"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData)=><Text style={styles.itemTextStyle}>{rowData}</Text>
                    }
                />
            </View>
        );
    }

    componentWillMount() {
        this.initData();
    }

    initData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                ["row1", "row2", "row3", "row4", "row5", "row6", "row7", "row8", "row9", "row10", "row11", "row12", "row13"]
            ),
        });
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

    itemTextStyle: {
        fontSize: 30,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: "#999",
    },
});