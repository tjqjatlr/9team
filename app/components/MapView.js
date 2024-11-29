import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ latitude, longitude }) => {
  const mapRef = useRef(null);

  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const moveToMarker = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(initialRegion, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        onLayout={() => {
            if (mapRef.current) {
              mapRef.current.animateToRegion(initialRegion, 1000);
            }
          }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="근무지 위치"
          description="충남 천안시 동남구 만남로 43 B관 4층"
        />
      </MapView>
      <TouchableOpacity style={styles.resetButton} onPress={moveToMarker}>
      <Image
          source={require('../../assets/target.png')}
          style={styles.resetButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      height: 200,
      width: '90%',
      marginLeft: 20, 
      marginBottom: 5,
      position: 'relative',
    },
    map: {
      flex: 1,
      borderRadius: 20, 
      overflow: 'hidden', 
    },
    resetButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    resetButtonImage: {
      width: 30,
      height: 30,
      marginVertical: 150,
      borderRadius: 100, 
    },
});

export default MapViewComponent;
