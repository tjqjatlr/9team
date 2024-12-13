import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { BottomTab_a } from '../../components';
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
      image: require('../../../assets/knotted.jpg'),
      messages: [
        { id: '1', text: '안녕하세요!', timestamp: '2024-12-08T09:00:00', sender: 'me' },
        { id: '2', text: '이번 주 근무 일정 확인 부탁드려요! 길게 쓰면 어떻게 보일까 확인해봅니다.', timestamp: '2024-12-08T10:30:00', sender: 'other' },
      ],
    },
    {
      id: '2',
      title: 'CU',
      lastMessage: '주말 야간 근무 가능하신가요?',
      timestamp: '어제',
      image: require('../../../assets/cu.jpg'),
      messages: [
        { id: '1', text: '열심히 일하겠습니다!', timestamp: '2024-12-07T14:10:00', sender: 'me' },
        { id: '2', text: '주말 야간 근무 가능하신가요?', timestamp: '2024-12-07T14:15:00', sender: 'other' },
      ],
    },
    {
      id: '3',
      title: '고클린',
      lastMessage: '출근 시간 조정 가능할까요?',
      timestamp: '3일 전',
      image: require('../../../assets/goclean.jpg'),
      messages: [
        { id: '1', text: '더 궁금한 사항이 있으신가요?', timestamp: '2024-12-05T17:44:00', sender: 'other' },
        { id: '2', text: '출근 시간 조정 가능할까요?', timestamp: '2024-12-05T17:45:00', sender: 'me' },
      ],
    },
  ]);

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        router.push({
          pathname: `parttimer/chatting/chatroomdetail/${item.id}`,
          params: {
            title: item.title,
            messages: JSON.stringify(item.messages),
          },
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
        <View style={styles.emptycontainer}>
          <Image source={require('../../../assets/nochat.png')} style={styles.icon} />
          <Text style={styles.text}>채팅방이 없어요...</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.push('parttimer/findjobs/findparttimer')}>
            <Text style={styles.buttonText}>알바 찾으러 가기</Text>
          </TouchableOpacity>
        </View>
      ) : (
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
