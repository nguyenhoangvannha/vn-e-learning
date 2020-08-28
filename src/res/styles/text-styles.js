import Sizes from "../sizes"
import FontWeight from "../../res/styles/font-weight"
import { StyleSheet } from 'react-native'

const TextStyles = StyleSheet.create({
    display4: {
        fontSize: Sizes.s96,
        fontWeight: FontWeight.w300,
        letterSpacing: -1.5
    },
    display3: {
        fontSize: Sizes.s60,
        fontWeight: FontWeight.w300,
        letterSpacing: -0.5
    },
    display2: {
        fontSize: Sizes.s48,
        fontWeight: FontWeight.w400
    },
    display1: {
        fontSize: Sizes.s34,
        fontWeight: FontWeight.w400,
        letterSpacing: 0.25
    },
    headline: {
        fontSize: Sizes.s24,
        fontWeight: FontWeight.w400
    },
    courseName: {
        fontSize: Sizes.s28,
        fontWeight: FontWeight.bold,
        letterSpacing: 0.15
    },
    title: {
        fontSize: Sizes.s20,
        fontWeight: FontWeight.w500,
        letterSpacing: 0.15
    },
    subhead: {
        fontSize: Sizes.s16,
        fontWeight: FontWeight.w400,
        letterSpacing: 0.15,
    },
    subtitle: {
        fontSize: Sizes.s14,
        fontWeight: FontWeight.w500,
        letterSpacing: 0.1
    },
    body1: {
        fontSize: Sizes.s16,
        fontWeight: FontWeight.w400,
        letterSpacing: 0.5
    },
    body2: {
        fontSize: Sizes.s14,
        fontWeight: FontWeight.w400,
        letterSpacing: 0.25
    },
    button: {
        fontSize: Sizes.s14,
        fontWeight: FontWeight.w500,
        letterSpacing: 1.25
    },
    caption: {
        fontSize: Sizes.s12,
        fontWeight: FontWeight.w400,
        letterSpacing: 0.4
    },
    overline: {
        fontSize: Sizes.s10,
        fontWeight: FontWeight.w400,
        letterSpacing: 1.5
    },
    smallTab: {
        fontSize: Sizes.s8,
        fontWeight: FontWeight.bold,
        letterSpacing: 1,
        margin: 0
    },
})

export default TextStyles