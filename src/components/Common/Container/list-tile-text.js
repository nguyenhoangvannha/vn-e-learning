import React from 'react'
import CText from '../Text/c-text'
import TextStyles from '../../../res/styles/text-styles'
import ListTile from './list-tile'

const ListTileText = ({ style, title, subtitle, leading, trailing, bodyItemsSpace, leadingMarginRight }) => {
    return (
        <ListTile
            leading={leading}
            title={title != undefined ? <CText data={title} style={TextStyles.title} /> : undefined}
            subtitle={subtitle != undefined ? <CText data={subtitle} style={TextStyles.subtitle} /> : undefined}
            trailing={trailing}
            style={style}
            bodyItemsSpace={bodyItemsSpace}
            leadingMarginRight={leadingMarginRight}
        />
    )
}

export default ListTileText
