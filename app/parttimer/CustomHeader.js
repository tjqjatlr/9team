import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CustomHeader = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    <View style={{ flex: 0.97 }} /> 
    <TouchableOpacity>
      <Image 
        source={require('../../assets/search.png')}
        style={styles.icon} 
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8eaec7', 
  },
  icon: {
    width: 20, 
    height: 20, 
  },
});

export default CustomHeader;
