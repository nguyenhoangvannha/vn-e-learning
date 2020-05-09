import { StyleSheet } from 'react-native'
import Alignment from "./alignment"
import Sizes from "./sizes"
import FlexDirection from './flex-direction'

const Styles = StyleSheet.create({
    fullScreen:{
        flex: 1,
        width: '100%'
    },
    row: {
        flexDirection: FlexDirection.row,
    },
    screenContainer: {
        flex: 1,
        width: '100%',
        padding: Sizes.s24,
    },
    screenColumn: {
        justifyContent: Alignment.center,
    }
})

export default Styles