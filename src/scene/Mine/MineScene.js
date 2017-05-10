/**
 * Created by liurunxiong on 2017/5/10.
 */
import React,{Component} from "react"
import {View, Text} from 'react-native'
import color from '../../widget'
import styleTest from '../../common/styleTest'

class MineScene extends Component {
    render() {
        return(
        <View style={styleTest.container}>
            <Text style={styleTest.maintext}>MineScene</Text>
        </View>
        );
    }
}
export default MineScene;