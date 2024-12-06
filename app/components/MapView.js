import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapViewComponent = ({ latitude, longitude, address, title }) => {
  const mapRef = useRef(null);

  {/*초기 지도 위치 설정*/}
  const initialRegion = {
    latitude,
    longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  {/* 마커로 이동 */}
  const moveToMarker = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(initialRegion, 1000);
    }
  };

  return (
    <View style={styles.container}>
      {/* 지도 표시 */}
      <View style={styles.mapWrapper}>
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
            title={title || "근무지 위치"}
            description={address || "주소 정보 없음"}
          />
        </MapView>
      </View>

      {/* 마커로 이동 버튼 */}
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
  mapWrapper: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2, 
    borderColor: '#B1E7ED',
  },
  map: {
    flex: 1, 
  },
  resetButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    bottom: 150,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  resetButtonImage: {
    width: 30,
    height: 30,
  },
});

export default MapViewComponent;