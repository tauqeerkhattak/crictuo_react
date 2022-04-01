import React from 'react';
import {StyleSheet, View, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import globals from '../constants/globals';
import CustomText from './CustomText';
import Divider from '../model/Divider';
import PercentIndicator from '../model/PercentIndicator';

const MatchCard = ({navigation, item}) => {
    console.log(item.criclyticsButtonFlags.featuredSeriesName);
    return (
        <Pressable style={styles.matchCard} onPress={(event) => {
            console.log('Hiii');
            navigation.navigate('IplSingleTeam');
        }}>
            <View style={styles.column}>
                <View style={styles.seriesRow}>
                    <View>
                        <CustomText text={item.seriesName} textSize={12}/>
                        <CustomText text={getBottomRow(item)} textSize={10}/>
                    </View>
                    <View style={{flexGrow: 1}}/>
                    <Icon name="arrow-right" size={30} color={globals.COLOR.PRIMARY}/>
                </View>
                <Divider/>
                <View style={{flex: 8}}>
                    {teamRow(item.matchScore[0])}
                    {teamRow(item.matchScore[1])}
                    <View style={{flex: 3}}>
                        <PercentIndicator item={item}/>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

function getBottomRow(item) {
    let data = '';
    data += item.matchNumber;
    data += ',' + item.venue;
    data += ', ' + format_time(parseInt(item.startDate));
    return data;
}

function format_time(s) {
    const date = new Date(s);
    let data = '';
    data += date.toDateString();
    data += ', ' + date.getHours() + ':' + date.getMinutes() + ' PKT';
    return data;
}

function teamRow(matchScore) {
    return (<View style={{...styles.teamRow}}>
        <Image style={{width: 35, height: 25, marginRight: 10,}}
               source={{uri: "https://images.cricket.com/teams/" + matchScore.teamID + "_flag_safari.png"}}/>
        <CustomText text={matchScore.teamShortName}/>
        <View style={{flex: 1}}/>
        <CustomText text={getTeamScore(matchScore.teamScore[matchScore.teamScore.length - 1])}/>
    </View>);
}

function getTeamScore(teamScore) {
    let score = '';
    if (teamScore?.length === 0 || teamScore === undefined) {
        return 'Yet to bat';
    } else {
        score += teamScore?.runsScored;
        score += '/' + teamScore?.wickets;
        score += '   ' + teamScore?.overs;
    }
    return score;
}

const styles = StyleSheet.create({
    matchCard: {
        height: globals.SIZECONFIG.screenHeight * 0.3,
        // width: globals.SIZECONFIG.screenWidth * 0.99,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        alignContent: 'center',
        borderBottomRightRadius: globals.SIZECONFIG.matchCardRadius,
        borderBottomLeftRadius: globals.SIZECONFIG.matchCardRadius,
        borderTopLeftRadius: globals.SIZECONFIG.matchCardRadius,
        borderTopRightRadius: globals.SIZECONFIG.matchCardRadius,
        elevation: 8.0,
    },
    column: {
        padding: 2,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    seriesRow: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
    },
    teamRow: {
        flex: 3,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginRight: 20,
    },
    textStyle: {
        color: globals.COLOR.TEXT,
    },
});

export default MatchCard;