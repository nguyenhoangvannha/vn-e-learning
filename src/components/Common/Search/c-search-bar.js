import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../../globals/colors';
import AbstractAppbar from '../AppBar/abstract-appbar';
import CIonIcon from '../Icon/c-ion-icon';
import IconName from '../../../globals/icon-name';
import Expanded from '../Container/expanded';
import CTextInput from '../TextField/c-text-input';
import CText from '../Text/c-text';
import Styles from '../../../globals/styles';
import Sizes from '../../../globals/sizes';
import FontWeight from '../../../globals/font-weight';

const CSearchBar = () => {
    const [value, setValue] = useState('')

    const onChangeText = (newText) => {
        setValue(newText)
    }

    return (
        <View>
            <AbstractAppbar
                title={<CText data='Search' style={styles.title} />}
                middle={<Expanded>
                    <CTextInput onChangeText={onChangeText} />
                </Expanded>}
                trailing={<CIonIcon name={value.length == 0 ? IconName.mdSearch : IconName.mdClose} />}
            />
        </View>
    );
}

export default CSearchBar

const styles = StyleSheet.create({
    title: {
        paddingRight: Sizes.s6,
        fontWeight: FontWeight.w600,
    }
})
