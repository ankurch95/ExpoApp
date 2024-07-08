import React, { useCallback, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const MAP_TYPE = ['standard', 'satellite', 'satelliteFlyover', 'hybrid', 'hybridFlyover', 'terrain', 'none']
const MapScreen = () => {
    const [mapType, setMapType] = useState<String | any>('standard');

    return (

        <View style={styles.container}>
            <MapView
                style={styles.map}
                mapType={mapType}
                region={INITIAL_REGION}>
                <Marker
                    title='My Location'
                    description='My Location Description'
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }} />

                <SafeAreaView>

                    {MAP_TYPE.map((type) => (
                        <Text
                            key={type}
                            onPress={() => setMapType(type)}>
                            {type}
                        </Text>
                    ))}
                </SafeAreaView>
            </MapView>

        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});