import { FlatList } from 'react-native'
import PlaceItem from '../components/PlaceItem'
import React from 'react'
import { useSelector } from 'react-redux'

const PlaceListScreen = ({navigation}) => {
    const places = useSelector(state=>state.places.places)

    const renderPlaceItem = (data) => (
        <PlaceItem  
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={()=>navigation.navigate("Detalle", {placeId: data.item.id})}
        />
    )

    return (
        
        <FlatList style={{flex:1}}
            data={places}
            renderItem={renderPlaceItem}
            keyExtractor ={item => item.id}
        />
        
    )
}



export default PlaceListScreen