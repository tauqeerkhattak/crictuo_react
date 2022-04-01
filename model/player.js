import React from 'react';
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Player = ({ index, singlePlayer }) => {
    return (
        <SafeAreaView>
            <View style={styles.row}>
                <View style={styles.serial}><Text>{index + 1}</Text></View>
                <View style={styles.icon}></View>
                <View style={styles.name}><Text>{singlePlayer.playerName}</Text></View>
                <View style={styles.credits}><Text>{singlePlayer.playerClubName}</Text></View>
            </View>
        </SafeAreaView>
    );
    // return (
    //     <View style={styles.row}>
    //         {/* <View style={styles.serial}>
    //             <Text>{index}</Text>
    //         </View>
    //         <View style={styles.icon}></View> */}
    //         <View style={styles.name}>
    //             <Text>{singlePlayer.playerName}</Text>
    //         </View>
    //         {/* <View style={styles.credits}>
    //             <Text>{singlePlayer.playerClubName}</Text>
    //         </View> */}
    //     </View>
    // );
};

const styles = StyleSheet.create({
    serial: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        flex: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    credits: {
        flex: 3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        width: windowWidth * 0.97,
        flexDirection: 'row',
        marginTop: 2.5,
        marginBottom: 2.5,
        marginLeft: 5,
        marginRight: 5,
    },
});

export default Player;