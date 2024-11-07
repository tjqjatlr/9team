import React from 'react';
import { View, Text,  ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boss_BottomTab from './boss_bottomtab'; // 하단바 컴포넌트
import styles from './chatroomscreen.style';


const ChatRoomScreen = () => {
  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>채팅방</Text>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* 빈 채팅방 표시 */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.emptyContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7555/7555057.png' }} // 필요한 경우에 맞게 아이콘 추가
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyText}>채팅방이 없어요..</Text>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Find job')}>
            <Text style={styles.buttonText}>알바를 찾으러 가기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 하단바 */}
      <Boss_BottomTab />
    </View>
  );
};

export default ChatRoomScreen;
