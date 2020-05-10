import React from 'react'
import { StyleSheet} from 'react-native'
import { Appbar } from 'react-native-paper';
import Colors from '../../../globals/colors';
import Sizes from '../../../globals/sizes';
import TextStyles from '../../../globals/text-styles';
import Alignment from '../../../globals/alignment';


const CAppBar = ({ title, subtitle, hasBack = true, children }) => {
    return (
        <Appbar.Header style={styles.container} >
            {
                hasBack &&
                <Appbar.BackAction
                    color={Colors.bodyText}
                    size={Sizes.s22}
                    style={styles.backButton} />
            }
            {
                (title != undefined) &&
                <Appbar.Content
                    title={title}
                    titleStyle={styles.title}
                    subtitle={subtitle} />
            }
            {children}
            {/* <CAvatar uri={Strings.defaultAvatar} size={26}/> */}
            {/* <Appbar.Action icon={name='magnify'} />
            <Appbar.Action icon={name='dots-vertical'}/> */}
        </Appbar.Header>
    );

}

export default CAppBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.transparent,
        elevation: Sizes.s0,
        width: '100%',
    },
    backButton: {
        marginRight: Sizes.s0,
    },
    title: {
        ...TextStyles.title,
        alignSelf: Alignment.flexStart,
    }
})
