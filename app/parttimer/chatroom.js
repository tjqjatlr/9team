import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BottomTab_a from './BottomTab_a';
import styles from './chatroom.style';

const ChatRoom = () => {
  const router = useRouter();

  // 더미 채팅방 데이터
  const [chatRooms, setChatRooms] = useState([
    {
      id: '1',
      title: '노티드',
      lastMessage: '이번 주 근무 일정 확인 부탁드려요! 길게 쓰면 어떻게 보일까 확인해봅니다.',
      timestamp: '오전 10:30',
      image: require('../../assets/knotted.jpg'),
    },
    {
      id: '2',
      title: 'CU',
      lastMessage: '주말 야간 근무 가능하신가요?',
      timestamp: '어제',
      image: require('../../assets/cu.jpg'),
    },
    {
      id: '3',
      title: '고클린',
      lastMessage: '출근 시간 조정 가능할까요?',
      timestamp: '3일 전',
      image: require('../../assets/goclean.jpg'),
    },
  ]);

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        router.push({
          pathname: `parttimer/chatroom/${item.id}`,
          params: { title: item.title }, 
        })
      }
    >
      <Image source={item.image} style={styles.chatImage} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatTitle}>{item.title}</Text>
        <Text style={styles.chatLastMessage} numberOfLines={1} ellipsizeMode="tail">
          {item.lastMessage}
        </Text>
      </View>
      <Text style={styles.chatTimestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      {chatRooms.length === 0 ? (
        // 데이터가 없을 때의 화면
        <View style={styles.emptycontainer}>
          <Image source={require('../../assets/nochat.png')} style={styles.icon} />
          <Text style={styles.text}>채팅방이 없어요...</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push('parttimer/findparttimer')}>
            <Text style={styles.buttonText}>알바 찾으러 가기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // 데이터가 있을 때의 화면
        <FlatList
          data={chatRooms}
          keyExtractor={(item) => item.id}
          renderItem={renderChatItem}
          contentContainerStyle={styles.chatListContainer}
        />
      )}
      <BottomTab_a />
    </View>
  );
};

export default ChatRoom;
