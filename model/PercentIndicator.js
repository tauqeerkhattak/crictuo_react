import {View, StyleSheet, Text} from "react-native";
import globals from "../constants/globals";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomText from "./CustomText";

const height = 10;

const PercentIndicator = ({item}) => {
    if (item === undefined) {
        return (
            <View style={styles.linear}>
                <CustomText text={"Not available"}/>
            </View>
        );
    } else if (item.matchStatus === "completed") {
        return (
            <View style={styles.completed}>
                <CustomText text={item.matchResult}/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.linear}>
                    <Text style={{
                        fontSize: 12,
                        color: globals.COLOR.PRIMARY,
                        fontWeight: 'bold',
                    }}>{getPercentage(item.teamsWinProbability.homeTeamPercentage)}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={{
                        fontSize: 12,
                        color: globals.COLOR.TEXT,
                        fontWeight: 'bold',
                    }}>{getPercentage(item.teamsWinProbability.tiePercentage)}</Text>
                    <View style={{flex: 1}}/>
                    <Text style={{
                        fontSize: 12,
                        color: globals.COLOR.SECONDARY,
                        fontWeight: 'bold',
                    }}>{getPercentage(item.teamsWinProbability.awayTeamPercentage)}</Text>
                </View>
                <View style={styles.linear}>
                    <View
                        style={{
                            width: getPercentage(item.teamsWinProbability.homeTeamPercentage),
                            height: height,
                            backgroundColor: globals.COLOR.PRIMARY,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                        }}
                    />
                    <View
                        style={{
                            width: getPercentage(item.teamsWinProbability.tiePercentage),
                            height: height,
                            backgroundColor: globals.COLOR.TEXT,
                        }}
                    />
                    <View
                        style={{
                            width: getPercentage(item.teamsWinProbability.awayTeamPercentage),
                            height: height,
                            backgroundColor: globals.COLOR.SECONDARY,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                        }}
                    />
                </View>
                <View style={{...styles.linear, alignItems: "center"}}>
                    <Icon name="circle" color={globals.COLOR.PRIMARY} size={10}/>
                    <View style={{width: 10}}/>
                    <Text
                        style={{
                            color: globals.COLOR.PRIMARY,
                            fontSize: 12,
                            fontWeight: "bold",
                        }}
                    >
                        {item.homeTeamName}
                    </Text>
                    <View style={{flex: 1}}/>
                    <Icon name="circle" color={globals.COLOR.TEXT} size={10}/>
                    <View style={{width: 10}}/>
                    <Text
                        style={{
                            color: globals.COLOR.TEXT,
                            fontSize: 12,
                            fontWeight: "bold",
                        }}
                    >
                        TIE
                    </Text>
                    <View style={{flex: 1}}/>
                    <Text
                        style={{
                            color: globals.COLOR.SECONDARY,
                            fontSize: 12,
                            fontWeight: "bold",
                        }}
                    >
                        {item.awayTeamName}
                    </Text>
                    <View style={{width: 10}}/>
                    <Icon name="lens" color={globals.COLOR.SECONDARY} size={10}/>
                </View>
            </View>
        );
    }
};

function getPercentage(winPercentage) {
    if (winPercentage === "") {
        return "0%";
    }
    return winPercentage + "%";
}

const styles = StyleSheet.create({
    linear: {
        height: 15,
        flexDirection: "row",
        marginHorizontal: 20,
    },
    container: {
        marginBottom: 10,
    },
    completed: {
        flex: 1,
        alignItems: "center",
    },
});

export default PercentIndicator;
