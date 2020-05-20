import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PricingCard } from 'react-native-elements';
import Sizes from '../../res/sizes';



const PricingItem = () => {
    return (
        <PricingCard
            containerStyle ={{ height: Sizes.s300 , width: Sizes.s240}}
            color="#4f9deb"
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
    )
}

export default PricingItem

const styles = StyleSheet.create({})
