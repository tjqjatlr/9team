import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ChatRoomDetail = () => {
  const { id, title } = useLocalSearchParams(); // title 파라미터 가져오기

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || '채팅방'}</Text>
      <Text style={styles.message}>여기에 채팅 내용을 표시하세요.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 32,
  },
});

export default ChatRoomDetail;
