import React from 'react'
import CFlatGrid from '../../Common/Container/c-flat-grid'
import categoriesData from '../../../data/mock/categories-mock-data'
import CImageButton from '../../Common/Button/c-image-button'
import Strings from '../../../res/strings'
import Sizes from '../../../res/sizes'
import NavigationUtils from '../../../routes/navigation-utils'
import { RootNavigation } from '../../../routes/navigations/root-navigation'
import Routes from '../../../routes/routes'
import { useSelector, useDispatch } from 'react-redux'
import { DoGetCourseByCategoryCourseAction } from '../../../feature/course/actions'

const ListCategory = ({categories}) => {

    const dispatch = useDispatch();

    return (
        <CFlatGrid
            data={categories}
            renderItem={(item) =>
                <CImageButton
                    uri={Strings.blueImage}
                    title={item.name}
                    width={Sizes.s150}
                    height={Sizes.s60} 
                    onPress={
                        () => {
                            dispatch(DoGetCourseByCategoryCourseAction(item.id))
                            RootNavigation.push(Routes.CategoryDetailScreen, {
                                categoryId: item.id,
                            })
                        }
                    }/>}
            keyExtractor={item => item}
        />
    )
}

export default ListCategory