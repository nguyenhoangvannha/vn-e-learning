import Sizes from "./sizes"
import FontWeight from "./font-weight"
import Colors from "./colors"
import { StyleSheet } from 'react-native'

const TextStyles = StyleSheet.create({
    h1: {
        fontSize: Sizes.s28,
        fontWeight: FontWeight.normal,
        lineHeight: Sizes.s32,
        color: Colors.heavyCaption,
    },
    h3: {
        fontSize: Sizes.s20,
        fontWeight: FontWeight.normal,
        lineHeight: Sizes.s24,
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
    headLine: {
        fontSize: Sizes.s16,
        lineHeight: Sizes.s20,
        fontWeight: FontWeight.w600,
        color: Colors.back400,
    },
})

export default TextStyles