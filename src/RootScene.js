/**
 * Created by liurunxiong on 2017/5/10.
 */
import React,{Component} from 'react';
import {View} from 'react-native'
import {StatusBar} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import color from './widget/color';
import {screen,system,tool} from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import OrderScene from './scene/Order/OrderScene'
import MineScene from './scene/Mine/MineScene'

import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

class RootScene extends Component {
    constructor() {
        super();

        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState,currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if(previousScene !== currentState) {
                            if(lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content');
                            }else {
                                StatusBar.setBarStyle('dark-content');
                            }
                        }
                    }
                }
            ></Navigator>
        )
    }
}

const Tab = TabNavigator(
    {
        Home:{
            screen:HomeScene,
            navigationOptions:({navigate}) => ({
                tabBarLabel:'团购',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected@2x.png')}
                    />
                ),
            }),
        },

        Nearby:{
            screen:NearbyScene,
            navigationOptions:({navigate}) => ({
                tabBarLabel:'附近',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}
                    ></TabBarItem>
                ),
            }),
        },

        Order:{
            screen:OrderScene,
            navigationOptions:({navigate}) => ({
                tabBarLabel:'订单',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_order@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
                    ></TabBarItem>
                ),
            }),
        },

        Mine:{
            screen:MineScene,
            navigationOptions:({navigate}) => ({
                tabBarLabel:'我的',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    ></TabBarItem>
                ),
            }),
        },
    },

    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:true,
        animationEnabled:true,
        lazy:true,
        tabBarOptions:{
            activeTintColor:color.theme,
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff'},
        },
    }
);

const Navigator = StackNavigator(
    {
        Tab:{screen:Tab},
        Web:{screen:WebScene},
        GroupPurchase:{screen:GroupPurchaseScene},
    },

    {
        navigationOptions:{
            headerBackTitle:null,
            headerTintColor:'#333333',
            showIcon:true,
        },
    }
);

export default RootScene;