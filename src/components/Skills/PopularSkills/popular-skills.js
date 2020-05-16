import React from 'react'
import { StyleSheet } from 'react-native'
import CFlatList from '../../Common/Container/c-flat-list'
import skillData from '../../../data/mock/skills-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'
import CChip from '../../Common/Container/c-chip'
import * as RootNavigation from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'


const PopularSkills = ({ style, headerText }) => {

    const onItemPressed = (item) => {
        RootNavigation.navigate(Routes.SkillsDetail, {
            skills: item
        })
    }

    return (
        <CFlatList
            containerStyle={style}
            headerText={headerText}
            data={skillData}
            renderItem={({ item }) => <CChip title={item} onPress={() => onItemPressed(item)} />}
            keyExtractor={item => item}
            horizontal={true}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s6} />}
            hasTrailing={false} />
    )
}

export default PopularSkills

const styles = StyleSheet.create({})
