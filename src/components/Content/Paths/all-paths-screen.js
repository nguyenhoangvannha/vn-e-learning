import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CAppBar from '../../Common/AppBar/c-app-bar'
import Paths from './paths'
import CScrollView from '../../Common/Container/c-scroll-view'
import Styles from '../../../res/styles/styles'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import { PathsContext } from '../../../provider/paths-provider'
import ScreenContainer from '../../Common/Screen/screen-container'

const Divider = () => <SizedBox height={Sizes.s16} />

const AllPathsScreen = () => {

    const pathsContext = useContext(PathsContext)

    const pathIds = pathsContext.pathIds

    return (
        <ScreenContainer>
            <CAppBar title='Paths' />
            <CScrollView contentContainerStyle={Styles.screenContainer}>
                <Paths
                    headerText='Conferences'
                    pathIds={pathIds.slice(0, 10)}
                />
                <Divider />
                <Paths
                    headerText='Software Development'
                    pathIds={pathIds.slice(11, 20)} />
                <Divider />
                <Paths
                    headerText='IT Ops'
                    pathIds={pathIds.slice(21, 30)} />
                <Divider />
                <Paths
                    headerText='Information Security'
                    pathIds={pathIds.slice(31, 40)} />
            </CScrollView>
        </ScreenContainer>
    )
}

export default AllPathsScreen

const styles = StyleSheet.create({})
