/**
 * Created by liurunxiong on 2017/5/10.
 */
import {Dimensions, Platform, PixelRatio} from 'react-native'

export default {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    onePixel:1/PixelRatio.get(),
    statusBarHeight:(Platform.OS === 'ios'?20:0)
}