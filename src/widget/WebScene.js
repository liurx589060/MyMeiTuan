/**
 * Created by liurunxiong on 2017/5/10.
 */

import React,{Component} from "react"
import {View, Text} from 'react-native'
import {color} from './'
import styleTest from '../common/styleTest'

class WebScene extends Component {
    render() {
        return(
            <View style={styleTest.container}>
                <Text style={styleTest.maintext}>WebScene</Text>
            </View>
        );
    }
}
export default WebScene;