import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BottomTab_a from './BottomTab_a';
import styles from './favoritelist.style';

const FavoriteList = () => {
  const router = useRouter();

  const handleFindJobPress = () => {
    router.push('parttimer/findparttimer');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/nofavorites.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>찜한 일자리가 없어요...</Text>
      <TouchableOpacity style={styles.button} onPress={handleFindJobPress}>
        <Text style={styles.buttonText}>일자리 찾으러 가기</Text>
      </TouchableOpacity>
      <BottomTab_a/>
    </View>
  );
};

export default FavoriteList;
