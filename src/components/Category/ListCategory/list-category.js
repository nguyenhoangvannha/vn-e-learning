import React from 'react'
import CFlatGrid from '../../Common/Container/c-flat-grid'
import categoriesData from '../../../data/mock/categories-mock-data'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'

const ListCategory = () => {
    return (
        <CFlatGrid
            data={categoriesData}
            renderItem={(item) =>
                <CImageButton
                    uri={Strings.defaultCourseThubnail}
                    title={item}
                    width={Sizes.s150}
                    height={Sizes.s60} />}
            keyExtractor={item => item}
        />
    )
}

export default ListCategory