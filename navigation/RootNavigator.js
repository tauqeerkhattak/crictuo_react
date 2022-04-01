import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';

import Splash from '../screens/Splash';
import Detail from '../screens/Detail';
import IplSingleTeam from '../screens/IplSingleTeam';
import Home from '../screens/Home';
import Main from '../navigation/BottomNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Splash' component={Splash}/>
                    <Stack.Screen name='Detail' component={Detail}/>
                    <Stack.Screen name='IplSingleTeam' component={IplSingleTeam}/>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='Main' component={Main}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default RootNavigator;