import React from 'react'
import { StyleSheet, View } from 'react-native'
import CFlatList from '../../Common/Container/c-flat-list'
import skillData from '../../../data/mock/skills-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../globals/sizes'
import CChip from '../../Common/Container/c-chip'

const PopularSkills = ({ style, headerText }) => {
    return (
        <View style={style}>
            <CFlatList
                headerText={headerText}
                data={skillData}
                renderItem={({item}) => <CChip title={item} />}
                keyExtractor={item => item}
                horizontal={true}
                ItemSeparatorComponent={() => <SizedBox width={Sizes.s6} />}
            />
        </View>
    )
}

export default PopularSkills

const styles = StyleSheet.create({})
