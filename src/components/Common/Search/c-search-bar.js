import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AbstractAppbar from '../AppBar/abstract-appbar';
import CIonIcon from '../Icon/c-ion-icon';
import IconName from '../../../res/icon-name';
import Expanded from '../Container/expanded';
import CTextInput from '../TextField/c-text-input';
import Sizes from '../../../res/sizes';
import FontWeight from '../../../globals/font-weight';
import i18n from '../../../res/i18n';

const CSearchBar = () => {
    const [value, setValue] = useState('')

    const onChangeText = (newText) => {
        setValue(newText)
    }

    return (
        <View>
            <AbstractAppbar
                middle={<Expanded>
                    <CTextInput onChangeText={onChangeText} placeholder={i18n.t('type_here')}/>
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
