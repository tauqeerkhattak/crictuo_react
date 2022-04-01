import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "react-native-paper";

async function getMatches() {

}

const Matches = () => {
    return (<View style={styles.container}>
        <Text>Matches</Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
});

export default Matches;