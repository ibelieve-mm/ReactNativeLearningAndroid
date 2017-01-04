/**
 * Descriptions：
 * <p>
 * Author：ChenME
 * Date：2017/1/4
 * Email：ibelieve1210@163.com
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    Image,
    View,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'http://upload.jianshu.io/users/upload_avatars/1135454/5cc60c8771ee.jpeg?imageMogr/thumbnail/90x90/quality/100';

export default class Menu extends Component {
    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };// 注意这里有分号

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri:uri }}/>
                    <Text style={styles.name}>ChenME</Text>
                </View>

                <Text
                    onPress={() => this.props.onItemSelected('更多信息请关注简书ChenME')}
                    style={styles.item}>
                    关于作者
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('联系我，QQ：978327152')}
                    style={styles.item}>
                    联系我
                </Text>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 10,
    },
});