import { Dimensions } from "react-native";

export default {
    COLOR: {
        PRIMARY: "#009345",
        SECONDARY: "#eb5325",
        BACKGROUND: "#ffffff",
        SPLASH: "#017FBD",
        TEXT: "#000000",
    },
    API: {
        primaryAPI: "https://apiv2.cricket.com/cricket",
    },
    SIZECONFIG: {
        matchCardRadius: 25,
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height,
    },
};