import { StyleSheet } from 'react-native'
import Alignment from "./alignment"
import Sizes from "./sizes"
import FlexDirection from './flex-direction'

const Styles = StyleSheet.create({
    fullScreen:{
        flex: 1,
        width: '100%',
        height: '100%',
    },
    row: {
        flexDirection: FlexDirection.row,
    },
    screenContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: Sizes.s18,
        paddingVertical: Sizes.s14,
    },
    screenColumn: {
        justifyContent: Alignment.center,
    }
})

export default Styles