import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import CFlatList from '../../Common/Container/c-flat-list'
import skillData from '../../../data/mock/skills-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import CChip from '../../Common/Container/c-chip'
import Routes from '../../../routes/routes'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import { SkillsContext } from '../../../provider/skills-provider'


const PopularSkills = ({ style, headerText }) => {

    const skillsContext = useContext(SkillsContext)

    const onItemPressed = (item) => {
        RootNavigation.navigate(Routes.SkillsDetail, {
            skills: item
        })
    }

    return (
        <CFlatList
            containerStyle={style}
            headerText={headerText}
            data={Array.from(skillData.values())}
            renderItem={({ item }) => <CChip title={item} onPress={() => onItemPressed(item)} />}
            keyExtractor={item => item}
            horizontal={true}
            ItemSeparatorComponent={() => <SizedBox width={Sizes.s6} />}
            hasTrailing={false} />
    )
}

export default PopularSkills

const styles = StyleSheet.create({})
