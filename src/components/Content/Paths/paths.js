import React from 'react'
import { StyleSheet, View } from 'react-native'
import PathItem from './path-item'
import PathItenVer from './path-item-ver'
import CFlatList from '../../Common/Container/c-flat-list'
import pathsData from '../../../data/mock/paths-mock-data'
import SizedBox from '../../Common/Container/sized-box'
import Sizes from '../../../res/sizes'
import CDivider from '../../Common/Container/c-divider'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import i18n from '../../../res/i18n'

const Paths = ({ style, headerText, horizontal = true, hasTrailing = true, onTrailingPress }) => {

    const onItemPressed = (item) => {
        RootNavigation.navigate(Routes.PathScreen, {
            path: item,
        })
    }

    const buildItem = (path) => {
        return horizontal ?
            <PathItem
                style={styles.item}
                image={path.image}
                name={path.name}
                coursesCount={path.coursesCount}
                onPress={() => onItemPressed(path)} />
            :
            <PathItenVer
                style={styles.item}
                image={path.image}
                name={path.name}
                coursesCount={path.coursesCount}
                onPress={() => onItemPressed(path)} />
    }

    return (
        <View style={style}>
            <CFlatList
                headerText={headerText}
                horizontal={horizontal}
                data={pathsData}
                renderItem={({ item }) => buildItem(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => horizontal ? <SizedBox width={Sizes.s16} /> : <CDivider containerHeight={Sizes.s12} />}
                trailingText={i18n.t('see_all')}
                hasTrailing={hasTrailing}
                onTrailingPress={onTrailingPress}
            />
        </View>
    )
}

export default Paths

const styles = StyleSheet.create({
    item: {
        width: Sizes.s200,
        height: Sizes.s150,
    }
})
