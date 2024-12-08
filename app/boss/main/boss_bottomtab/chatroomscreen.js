import React ,{ useState }from 'react';
import { View, Text,  ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Boss_BottomTab} from '../../../components_b'; 
import styles from './chatroomscreen.style';
import { useRouter } from 'expo-router';

const ChatRoomScreen = () => {
      const router = useRouter();
      const [chatRooms, setChatRooms] = useState([
        {
          id: '1',
          title: '안성재',
          lastMessage: '우리 가게 일 해볼래요?',
          timestamp: '오전 11:30',
          image: require('../../../../assets/Profile2.jpg'),
          messages: [
            { id: '1', text: '안녕하세요! 알바 관련 문의 드립니다.', timestamp: '2024-12-08T10:00:00', sender: 'me' },
            { id: '2', text: '우리 가게 일 해볼래요?', timestamp: '2024-12-08T11:30:00', sender: 'other' },
          ],
        },
        {
          id: '2',
          title: '정지선',
          lastMessage: '알바 경력 있어요?',
          timestamp: '5일 전',
          image: require('../../../../assets/Profile3.jpg'),
          messages: [
            { id: '1', text: '안녕하세요! 알바 구하고 있습니다.', timestamp: '2024-12-03T14:00:00', sender: 'me' },
            { id: '2', text: '알바 경력 있어요?', timestamp: '2024-12-03T14:30:00', sender: 'other' },
          ],
        },
        {
          id: '3',
          title: '김철수',
          lastMessage: '무슨 요일 희망해요?',
          timestamp: '3일 전',
          image: require('../../../../assets/profile.png'),
          messages: [
            { id: '1', text: '무슨 요일 희망해요?', timestamp: '2024-12-05T09:30:00', sender: 'other' },
            { id: '2', text: '안녕하세요! 출근 가능한 요일 말씀드립니다.', timestamp: '2024-12-05T09:15:00', sender: 'me' },
            
          ],
        },
      ]);
      

  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        router.push({
          pathname: `boss/main/boss_bottomtab/chatroom/${item.id}`,
          params: { title: item.title,
            messages: JSON.stringify(item.messages) },
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
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>채팅방</Text>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {chatRooms.length === 0 ? (
        // 데이터가 없을 때 화면
        <View style={styles.emptyContainer}>
          <Image source={require('../../../../assets/nochat.png')} style={styles.emptyIcon} />
          <Text style={styles.emptyText}>채팅방이 없어요...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('boss/main/boss_bottomtab/findparttimer')}
          >
            <Text style={styles.buttonText}>알바 찾으러 가기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // 데이터가 있을 때 화면
        <FlatList
          data={chatRooms}
          keyExtractor={(item) => item.id}
          renderItem={renderChatItem}
          contentContainerStyle={styles.chatListContainer}
        />
      )}

      {/* 하단바 */}
      <Boss_BottomTab />
    </View>
  );
};

export default ChatRoomScreen;