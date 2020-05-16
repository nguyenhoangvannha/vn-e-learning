import { StyleSheet } from 'react-native'
import Alignment from "./alignment"
import Sizes from "./sizes"
import FlexDirection from './flex-direction'
import Colors from './colors'
import Constants from "expo-constants";

const Styles = StyleSheet.create({
    fullScreen:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white,
        marginTop: Constants.statusBarHeight,
    },
    row: {
        flexDirection: FlexDirection.row,
    },
    screenContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: Sizes.s18,
        paddingVertical: Sizes.s14,
        backgroundColor: Colors.white,
    },
    body: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Sizes.s12,
    },
    screenColumn: {
        justifyContent: Alignment.center,
    }
})

export default Styles