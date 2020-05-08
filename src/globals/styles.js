import { StyleSheet } from 'react-native'
import Alignment from "./alignment"
import Sizes from "./sizes"

const Styles = StyleSheet.create({
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