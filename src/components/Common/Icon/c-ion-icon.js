//https://infinitered.github.io/ionicons-version-3-search/

import React, { useContext } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sizes from '../../../res/sizes';
import { ThemeContext } from '../../../provider/theme-provider';

const CIonIcon = ({ name, style, size, onPress, paddingHorizontal, color }) => {

    const themeContext = useContext(ThemeContext)

    const theme = themeContext.theme
    
    return (
        <Ionicons
            name={name}
            style={{ paddingHorizontal: paddingHorizontal ?? Sizes.s8, ...style , color: theme.iconColor}}
            size={size ?? Sizes.s24}
            color={color}
            onPress={onPress} />
    )
}

export default CIonIcon