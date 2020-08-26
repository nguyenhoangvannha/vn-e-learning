import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CChip from '../Common/Container/c-chip'
import CImage from '../Common/Image/c-image'
import Strings from '../../res/strings'
import CAvatar from '../Common/Image/c-avatar'

export default function InstructorChipItem({ id, name, avatar }) {
    return (
        <CChip
            leading={<CAvatar
                style={styles.avatar}
                uri={avatar ?? Strings.defaultAvatar}
                size={22}
            />}
            title={name}>
        </CChip>
    )
}

const styles = StyleSheet.create({})
