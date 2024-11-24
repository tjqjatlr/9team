import React ,{ useState }from 'react';
import { View, Text,  ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boss_BottomTab from './boss_bottomtab'; 
import styles from './chatroomscreen.style';
import { useRouter } from 'expo-router';

const ChatRoomScreen = () => {
      const router = useRouter();
       // 더미 채팅방 데이터
  const [chatRooms, setChatRooms] = useState([
    {
      id: '1',
      title: '안성재',
      lastMessage: '우리 가게 일 해볼래요?',
      timestamp: '오전 11:30',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
    {
      id: '2',
      title: '정지선',
      lastMessage: '알바 경력 있어요?',
      timestamp: '5일전',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUhokW7-Dmb7_J3adfQutjyKZUe4P99J4PQ&s',
    },
    {
      id: '3',
      title: '김철수',
      lastMessage: '무슨요일 희망해요?',
      timestamp: '3일 전',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
  ]);
  const renderChatItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        router.push({
          pathname: `boss/chatroom/${item.id}`,
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
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>채팅방</Text>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

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

      {/* 하단바 */}
      <Boss_BottomTab />
    </View>
  );
};

export default ChatRoomScreen;
