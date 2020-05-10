import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';
import Colors from '../../../globals/colors';
import Sizes from '../../../globals/sizes';
import TextStyles from '../../../globals/text-styles';
import FontWeight from '../../../globals/font-weight';


const CAppBar = ({title, subtitle}) => {
    return (
        <Appbar.Header style={styles.container}>
            <Appbar.BackAction color={Colors.bodyText} size={22}/>
            {
                (title != undefined) && <Appbar.Content
                    title={title}
                    titleStyle={styles.titleStyle}
                    subtitle={subtitle}
                />
            }
        </Appbar.Header>
    );

}

export default CAppBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
        elevation: Sizes.s0,
        margin: Sizes.s0,
        padding: Sizes.s0,
    },
    titleStyle: {
        ...TextStyles.title,
        alignSelf: 'flex-start',
    }
})
