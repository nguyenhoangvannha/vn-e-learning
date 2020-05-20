import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import Styles from '../../res/styles/styles'
import Colors from '../../res/colors'
import Alignment from '../../res/styles/alignment'
import CText from '../Common/Text/c-text'
import TextStyles from '../../res/styles/text-styles'
import FontWeight from '../../globals/font-weight'
import Sizes from '../../res/sizes'
import SizedBox from '../Common/Container/sized-box'
import { Icon } from 'react-native-elements'
import i18n from '../../res/i18n'
import { RootNavigation } from '../../routes/navigations/root-navigation'
import Routes from '../../routes/routes'
import CIonIcon from '../Common/Icon/c-ion-icon'
import IconName from '../../res/icon-name'

const Splash = () => {

    const [loading, setLoading] = useState(0)

    React.useEffect(() => {

        const timer = setInterval(() => {
            setLoading(loading + 1)
        }, 100)

        if(loading >= 100){
            RootNavigation.navigate(Routes.SignIn)
        }

        return () => {
            clearInterval(timer)
        };
    }, [loading]);

    return (
        <View style={Styles.fullScreen}>
            <View style={styles.container}>
                <CText data={i18n.t('app_name')} style={styles.label} />
                <SizedBox height={Sizes.s28} />
                <CIonIcon name={IconName.book} size={Sizes.s64} color={Colors.white} />
                <SizedBox height={Sizes.s64} />
                <ActivityIndicator />
                <SizedBox height={Sizes.s8} />
                <CText style={styles.loading}>{`${loading} %`}</CText>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue500,
        justifyContent: Alignment.center,
        alignItems: Alignment.center,
        paddingHorizontal: Sizes.s24,
    },
    label: {
        ...TextStyles.display1,
        fontWeight: FontWeight.bold,
        color: Colors.white,
        textAlign: Alignment.center,
    },
    loading: {
        ...TextStyles.subhead,
        color: Colors.white
    }
})
