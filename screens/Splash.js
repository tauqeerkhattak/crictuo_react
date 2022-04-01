import React from 'react';
import GLOBALS from '../constants/globals';
import {View, Text, Image, StyleSheet,} from 'react-native';

const delay = ms => new Promise(res => setTimeout(res, ms));

async function wait() {
    await delay(5000).then(() => {
        console.log('Waited 5 seconds');
    });
}

const Splash = ({navigation}) => {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await wait();
            await navigation.navigate('Main');
        });
        return unsubscribe;
    }, [navigation]);
    return (
        <View style={styles.screenContainer}>
            <Image source={require('../assets/cf_logo.png')} style={styles.stretch}/>
            <Text style={styles.textStyle}>Cricket n Fantasy</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBALS.COLOR.SPLASH,
    },
    stretch: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
    },
    textStyle: {
        color: GLOBALS.COLOR.BACKGROUND,
        fontSize: 22,
    },
});

export default Splash;