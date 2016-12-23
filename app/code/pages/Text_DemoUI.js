/**
 * Descriptions：Text组件的使用
 * 模仿网易新闻
 * <p>
 * Author：ChenME
 * Date：2016/11/13
 * Email：ibelieve1210@163.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

import Header from'../components/HeaderView.js';//引入Header组件
import  TitleView from "../components/TitleView.js";

export default class Text_DemoUI extends Component {
    render() {
        return (
            <View>
                <TitleView
                    instance={this}
                    title="Text组件"/>
                <Header/>
                <List title="新闻1"/>
                <List title="新闻2"/>
                <List title="新闻3"/>

                <ImportantNews news={[
                    '解放军收复钓鱼岛，世界人民承认钓鱼岛主权属于中国',
                    'R本为二战在中国制造的惨案向中国人民致歉',
                    '历经多年的漂泊，台湾终于回归大陆',
                    'A国宣布正式附属于中国，正式成为中国的一个藩国，并决定每年向中国缴纳各项财政收入的30%，该条款自今年9月12日开始实施。'
                ]}/>
            </View>
        );
    }
}

/**
 * List组件
 */
class List extends Component {
    render() {
        return (
            <View style={styles.list_item}>
                <Text style={styles.list_item_font}>{this.props.title}</Text>
            </View>
        );
    }
}


/**
 * ImportantNews组件
 */
class ImportantNews extends Component {

    show(title) {
        alert(title);
    }

    render() {

        var news = [];

        for (var i in this.props.news) {
            var text = (
                <Text
                    onPress={this.show.bind(this, this.props.news[i])}
                    numberOfLines={2}
                    style={styles.news_item}

                    key={i}//如果没有key属性，会有警告

                >{this.props.news[i]}</Text>
            );
            news.push(text)
        }

        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>

                {news}
            </View>
        );
    }
}


const styles = StyleSheet.create({

    /** *****************  List组件 start  ********************* */
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        justifyContent: 'center',
    },

    list_item_font: {
        fontSize: 16,
    },
    /** ******************  List组件 end  ********************** */

    /** *****************  ImportantNews start  ********************* */
    flex: {
        flex: 1,
    },

    news_title: {
        color: '#CD1D1C',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 15,
    },

    news_item: {
        fontSize: 15,
        marginLeft: 10,
        marginRight: 10,
        lineHeight: 40,
    },
    /** ******************  ImportantNews end  ********************** */
});