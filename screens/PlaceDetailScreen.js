import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux'

const PlaceDetailScreen = ({ route }) => {
    const { placeId } = route.params

    const selectedPlace = useSelector(state => state.places.places.find(place => place.id === placeId))

    console.log(selectedPlace)

    return (
        <View style={styles.container}>
            <Text>{selectedPlace.address}</Text>
            <Text>{selectedPlace.lat} , {selectedPlace.lng}</Text>
            <Text>{selectedPlace.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceDetailScreen