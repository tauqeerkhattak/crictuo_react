import {StyleSheet,View} from 'react-native';

const Divider = () => {
    return (<View style={{ flexDirection: 'row', alignItems: 'center',alignSelf: 'center',}}>
    <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: 'black',}} />
</View>);
};

export default Divider;