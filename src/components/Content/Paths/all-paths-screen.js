import React from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Paths from './paths'
import CScrollView from '../../Common/Container/c-scroll-view'
import Styles from '../../../globals/styles'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'

const Divider = () => <SizedBox height={Sizes.s16} />

const AllPathsScreen = () => {
    return (
        <View>
            <CAppBar title='Paths' />
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <Paths
                    headerText='Conferences' />
                <Divider />
                <Paths
                    headerText='Software Development' />
                <Divider />
                <Paths
                    headerText='IT Ops' />
                <Divider />
                <Paths
                    headerText='Information Security' />
            </CScrollView>
        </View>
    )
}

export default AllPathsScreen

const styles = StyleSheet.create({})
