/**
 * Created by liurunxiong on 2017/5/10.
 */

import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import {color} from '../../widget'
import styleTest from '../../common/styleTest'

class HomeScene extends Component {
    render() {
        return(
            <View style={styleTest.container}>
                <Text style={styleTest.maintext}>盛世古月</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:color.background
    },

    maintext: {
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        backgroundColor:'#ff0000',
    }
})

export default HomeScene;