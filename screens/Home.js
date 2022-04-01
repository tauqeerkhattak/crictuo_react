import React, {useState, useEffect} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Image, StyleSheet, ActivityIndicator, ScrollView, Pressable, Linking} from "react-native";
import globals from '../constants/globals';
import MatchCard from '../model/MatchCard';

async function getMatches() {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var graphql = JSON.stringify({
            query: "query featuredMatches {\r\n  featurematch {\r\n    criclyticsButtonFlags {\r\n      featuredSeriesName\r\n      isFinalFour\r\n      isPlayerIndex\r\n      tourID\r\n      seriesName\r\n      frcStartTime\r\n    }\r\n    IPLpolling {\r\n      name\r\n      isPolling\r\n      display\r\n      isAuctionStarted\r\n      isCompleted\r\n    }\r\n    displayFeatureMatchScoreCard\r\n    seriesID\r\n    currentinningsNo\r\n    currentInningteamID\r\n    currentInningsTeamName\r\n    seriesName\r\n    homeTeamName\r\n    awayTeamName\r\n    toss\r\n    startEndDate\r\n    matchStatus\r\n    matchID\r\n    matchType\r\n    statusMessage\r\n    phaseOfInningFlag\r\n    matchNumber\r\n    venue\r\n    matchResult\r\n    startDate\r\n    playerOfTheMatch\r\n    playerofTheMatchTeamShortName\r\n    playing11Status\r\n    probable11Status\r\n    playerID\r\n    firstInningsTeamID\r\n    secondInningsTeamID\r\n    thirdInningsTeamID\r\n    teamsWinProbability {\r\n      homeTeamShortName\r\n      homeTeamPercentage\r\n      awayTeamShortName\r\n      awayTeamPercentage\r\n      tiePercentage\r\n    }\r\n    fourthInningsTeamID\r\n    matchScore {\r\n      teamShortName\r\n      teamID\r\n      teamFullName\r\n      teamScore {\r\n        inning\r\n        inningNumber\r\n        battingTeam\r\n        runsScored\r\n        wickets\r\n        overs\r\n        runRate\r\n        battingSide\r\n        teamID\r\n        battingTeamShortName\r\n        declared\r\n        folowOn\r\n      }\r\n    }\r\n    teamsWinProbability {\r\n      homeTeamShortName\r\n      homeTeamPercentage\r\n      awayTeamShortName\r\n      awayTeamPercentage\r\n      tiePercentage\r\n    }\r\n    isCricklyticsAvailable\r\n    isLiveCriclyticsAvailable\r\n    isAbandoned\r\n    currentDay\r\n    currentSession\r\n  }\r\n}\r\n",
            variables: {}
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
        };

        const response = await fetch(globals.API.primaryAPI, requestOptions);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error.toString());
    }
}

const Home = ({navigation}) => {
    const [matches, setMatches] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(async () => {
        setLoading(true);
        const json = await getMatches();
        setMatches(json.data.featurematch);
        setLoading(false);
    }, [navigation]);
    return (
        <View style={styles.screenContainer}>
            {!isLoading ? <ScrollView style={styles.home}>
                <Carousel
                    // ref={(c) => { this.Carousel = c; }}
                    data={matches}
                    sliderWidth={globals.SIZECONFIG.screenWidth}
                    itemWidth={globals.SIZECONFIG.screenWidth}
                    // itemHeight={globals.SIZECONFIG.screenHeight * 0.3}

                    renderItem={({item}) => {
                        return (<MatchCard navigation={navigation} item={item}/>);
                    }}
                    onSnapToItem={(index) => setIndex(index)}
                />
                <Pagination
                    containerStyle={{paddingVertical: 10,}}
                    dotsLength={matches.length}
                    activeDotIndex={index}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 15,
                        backgroundColor: globals.COLOR.PRIMARY,
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                <Pressable onPress={() => {
                    console.log('Opening ad');
                    Linking.canOpenURL('https://www.google.com').then(supported => {
                        if (supported) {
                            Linking.openURL('https://www.google.com');
                        } else {
                            console.log('Cannot open the link');
                        }
                    })
                }
                }>
                    <View
                        style={{
                            alignSelf: 'center',
                        }}>
                        <Image source={require('../assets/ads.jpg')}
                               style={{
                                   resizeMode: 'contain',
                                   width: globals.SIZECONFIG.screenWidth * 0.95,
                               }}
                        />
                    </View>
                </Pressable>
            </ScrollView> : <ActivityIndicator size="large" color={globals.COLOR.PRIMARY}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        // flex: 1,
    },
    appbar: {
        backgroundColor: globals.COLOR.PRIMARY,
        elevation: 15.0,
    },
    home: {
        height: globals.SIZECONFIG.screenHeight - 50,
    },
    iplAd: {width: globals.SIZECONFIG.screenWidth * 0.8,}
});

export default Home;