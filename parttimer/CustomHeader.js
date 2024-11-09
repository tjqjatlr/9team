import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomHeader = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    <View style={{ flex: 0.97 }} /> 
    <TouchableOpacity>
      <Icon name="search" size={20} color="black" />
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
});

export default CustomHeader;
