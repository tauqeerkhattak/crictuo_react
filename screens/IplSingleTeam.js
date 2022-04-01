import React, { useEffect, useState } from 'react';
import globals from '../constants/globals';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, FlatList } from 'react-native';
import Player from '../model/player';



const IplSingleTeam = ({ navigation }) => {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            var graphql = JSON.stringify({
                query: "query probablePlaying11($matchID: String!) {\r\n  probablePlaying11(matchID: $matchID) {\r\n    homeTeamPP11 {\r\n      playerID\r\n      playerRole\r\n      playerClubName\r\n      playerName\r\n      captain\r\n      keeper\r\n    }\r\n    awayTeamPP11 {\r\n      playerID\r\n      playerRole\r\n      playerClubName\r\n      playerName\r\n      captain\r\n      keeper\r\n    }\r\n    homeTeamName\r\n    awayTeamName\r\n    homeTeamShortName\r\n    awayTeamShortName\r\n  }\r\n}",
                variables: { "matchID": "207889" },
            });
            var requestOptions = {
                method: "POST",
                headers: headers,
                body: graphql,
                redirect: 'follow',
            };
            const response = await fetch("https://apiv2.cricket.com/cricket", requestOptions);
            const json = await response.json();
            setData(json.data.probablePlaying11.homeTeamPP11);
        } catch (error) {
            console.log('Errorrrrrr');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, [navigation]);
    return (
        <View style={styles.screenContainer}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data} keyExtractor={({ playerID }, index) => playerID}
                    renderItem={({ index, item }) => (
                        <Player index={index} singlePlayer={item} />
                    )}>
                </FlatList>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // width: '100%',
        // alignItems: 'center',
        // backgroundColor: globals.COLOR.BACKGROUND,
    },
});

export default IplSingleTeam;