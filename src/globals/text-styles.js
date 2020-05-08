import Sizes from "./sizes"
import FontWeight from "./font-weight"
import Colors from "./colors"
import { StyleSheet } from 'react-native'

const TextStyles = StyleSheet.create({
    h1: {
        fontSize: Sizes.s28,
        fontWeight: FontWeight.bold,
        lineHeight: Sizes.s32,
        color: Colors.heavyCaption,
    },
    description: {
        fontSize: Sizes.s12,
        lineHeight: Sizes.s14,
        letterSpacing: 0.5,
        color: Colors.bodyText,
    },
    primaryButton: {
        fontSize: Sizes.s18,
        lineHeight: Sizes.s22,
        fontWeight: FontWeight.bold,
    },
})

export default TextStyles