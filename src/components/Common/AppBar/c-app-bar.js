import React from 'react'
import { StyleSheet } from 'react-native'
import Sizes from '../../../res/sizes'
import Alignment from '../../../res/styles/alignment'
import AbstractAppbar from './abstract-appbar'
import IconName from '../../../res/icon-name'
import CText from '../Text/c-text'
import Expanded from '../Container/expanded'
import BackButton from '../Button/back-button'

const CAppBar = ({ leading, onLeadingPressed, title, middle, trailing, hasLeading = true, dividerColor }) => {
    return (
        <AbstractAppbar
            leading={hasLeading &&
                <BackButton
                    iconName={leading ?? IconName.iosArrowBack}
                    onPress={onLeadingPressed} />
            }
            title={title &&
                <CText data={title} style={styles.title} />}
            middle={<Expanded />}
            trailing={trailing}
            dividerColor={dividerColor}
        />
    )
}

export default CAppBar

const styles = StyleSheet.create({
    title: {
        fontSize: Sizes.s18,
        alignSelf: Alignment.center,
    }
})