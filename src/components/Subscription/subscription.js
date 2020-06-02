import React from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../Common/AppBar/c-app-bar'
import Styles from '../../res/styles/styles'
import PricingItem from './pricing'
import CScrollView from '../Common/Container/c-scroll-view'

const Subscription = () => {
    return (
        <View style={Styles.fullScreen}>
            <CAppBar title='Subscription' />
            <CScrollView horizontal={true}>
                <PricingItem />
                <PricingItem />
                <PricingItem />
                <PricingItem />
            </CScrollView>
        </View>
    )
}

export default Subscription

const styles = StyleSheet.create({})
