import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CScrollView from './c-scroll-view'
import SizedBox from './sized-box'
import Sizes from '../../../res/sizes'
import Styles from '../../../res/styles/styles'
import CFlatList from './c-flat-list'

const DefaultSeparator = () => <SizedBox width={Sizes.s4} height={Sizes.s4} />

const CFlatGrid = ({ data, renderItem, keyExtractor, style }) => {

    var numColumns = Math.round(data.length / 2)

    return (
        <CScrollView horizontal={true}>
            <CFlatList
                style={style}
                data={data}
                renderItem={({ item }) =>
                    <View style={Styles.row}>
                        {renderItem(item)}
                        <DefaultSeparator/>
                    </View>
                }
                keyExtractor={keyExtractor}
                numColumns={numColumns}
                ItemSeparatorComponent={() => <DefaultSeparator />} 
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                contentContainerStyle={styles.contentContainerStyle}
                hasTrailing={false}/>
        </CScrollView>
    )
}

export default CFlatGrid

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingBottom: Sizes.s10,
    }
})
