import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AbstractAppbar from '../AppBar/abstract-appbar';
import CIonIcon from '../Icon/c-ion-icon';
import IconName from '../../../res/icon-name';
import Expanded from '../Container/expanded';
import CTextInput from '../TextField/c-text-input';
import Sizes from '../../../res/sizes';
import FontWeight from '../../../res/styles/font-weight';
import i18n from '../../../res/i18n';
import COpacityButton from '../Button/c-opacity-button';
import CText from '../Text/c-text';
import FlexDirection from '../../../res/styles/flex-direction';
import Alignment from '../../../res/styles/alignment';
import Colors from '../../../res/colors';

const CSearchBar = ({ onTextChange, onPressDone }) => {
    const [value, setValue] = useState('')

    const onChangeText = (newText) => {
        setValue(newText)
        if (onTextChange != undefined) onTextChange(value)
    }

    const buildTraling = () => {
        return (
            <View style={styles.trailing}>
                <CIonIcon
                    name={value.length == 0 ? IconName.mdSearch : IconName.mdClose}
                    onPress={() => {
                        if (value.length != 0) {
                            setValue('')
                        }
                    }} />
                {value.length > 0 &&
                    <COpacityButton style={styles.done} onPress={onPressDone}>
                        <CText>Done</CText>
                    </COpacityButton>}
            </View>
        )
    }

    return (
        <View>
            <AbstractAppbar
                middle={<Expanded>
                    <CTextInput
                        onChangeText={onChangeText}
                        placeholder={i18n.t('type_here')}>
                        {value}
                    </CTextInput>
                </Expanded>}
                trailing={buildTraling()}
            />
        </View>
    );
}

export default CSearchBar

const styles = StyleSheet.create({
    title: {
        paddingRight: Sizes.s6,
        fontWeight: FontWeight.w600,
    },
    trailing: {
        alignItems: Alignment.center,
        flexDirection: FlexDirection.row,
    },
    done: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        borderColor: Colors.gray,
        borderWidth: 1,
    }
})
