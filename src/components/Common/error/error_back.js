import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ErrorText from './error-text'
import BackButton from '../Button/back-button'
import Alignment from '../../../res/styles/alignment'
import SizedBox from '../Container/sized-box'
import Sizes from '../../../res/sizes'

export default function ErrorBack({text}) {
    return (
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
            <ErrorText text={text}>{text}</ErrorText>
            <SizedBox height={Sizes.s16}/>
            <BackButton/>
        </View>
    )
}

const styles = StyleSheet.create({})
