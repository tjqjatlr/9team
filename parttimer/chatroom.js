import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomTab_a from './BottomTab_a';
import styles from './chatroom.style';

const ChatRoom = () => {
  const navigation = useNavigation();

  const handleFindJobPress = () => {
    navigation.navigate('findparttimer');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/nochat.png')} 
        style={styles.icon}
      />
      <Text style={styles.text}>채팅방이 없어요...</Text>
      <TouchableOpacity style={styles.button} onPress={handleFindJobPress}>
        <Text style={styles.buttonText}>알바 찾으러 가기</Text>
      </TouchableOpacity>
      <BottomTab_a/>
    </View>
  );
};

export default ChatRoom;
