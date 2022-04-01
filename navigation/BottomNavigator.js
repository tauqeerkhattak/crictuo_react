import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Matches from "../screens/Matches";
import React from "react";
import {StyleSheet, View, Text, Image, Pressable} from "react-native";
import {getHeaderTitle} from '@react-navigation/elements';
import globals from "../constants/globals";
import {Appbar} from "react-native-paper";

const Tabs = createBottomTabNavigator();
const names = [
    require('../assets/navigation/home.png'),
    require('../assets/navigation/ball.png'),
    require('../assets/navigation/news.png'),
    require('../assets/navigation/stats.png'),
    require('../assets/navigation/more.png'),
];

function MyTabBar({state, descriptors, navigation}) {
    return (
        <View style={styles.bottomBar}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                let isFocused = state.index == index;
                console.log(names[0].toString());
                return (
                    <View style={styles.bottomTabs} key={index}>
                        <Pressable onPress={() => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                                navigation.navigate({name: route.name, merge: true});
                            }
                        }}>
                            <View>
                                <Image source={names[index]}
                                       style={{
                                           width: 30,
                                           height: 30,
                                           resizeMode: 'contain',
                                           tintColor: isFocused ? globals.COLOR.PRIMARY : '#000',
                                           alignSelf: 'center',
                                       }}/>
                                <Text style={{
                                    color: isFocused ? globals.COLOR.PRIMARY : '#000',
                                }}>{label}</Text>
                            </View>
                        </Pressable>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row', width: '100%', alignItems: 'center',
        backgroundColor: globals.COLOR.BACKGROUND,
        height: globals.SIZECONFIG.screenHeight * 0.08,
    },
    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '50%',
        elevation: 15.0,
    },
});


function MyTabs() {
    console.log('Tabsss');

    return (
        <Tabs.Navigator tabBar={props => <MyTabBar {...props}/>} screenOptions={{
            position: 'absolute', header: ({navigation, route, options}) => {
                const title = getHeaderTitle(options, route.name);

                return <View>
                    <Appbar.Header style={{backgroundColor: globals.COLOR.PRIMARY}}>
                        <Appbar.Content title={title}/>
                    </Appbar.Header>
                </View>;
            },
        }}>
            <Tabs.Screen name={'Home'} component={Home}/>
            <Tabs.Screen name={'Matches'} component={Matches}/>
        </Tabs.Navigator>
    );
}

export default function App() {
    return (
        <MyTabs/>
    );
}