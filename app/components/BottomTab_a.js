import React from 'react';
import { View, Text,  TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import styles from './bottomTab_a.style';

const BottomTab_a = () => {
  const router = useRouter();

  const tabs = [
    { name: '홈', icon: 'home-outline', route: 'parttimer/home/home_a' },
    { name: '알바찾기', icon: 'search-outline', route: 'parttimer/findjobs/findparttimer' },
    { name: '채팅방', icon: 'chatbubble-ellipses-outline', route: 'parttimer/chatting/chatroom' },
    { name: '바로추천', icon: 'bulb-outline', route: 'parttimer/recommendation/profilecard_a' },
    { name: '근무일정', icon: 'calendar-outline', route: 'parttimer/schedule/scheduler' },
    { name: '찜', icon: 'heart-outline', route: 'parttimer/bookmark/favoritelist' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => router.push(tab.route)}
        >
          <Icon name={tab.icon} size={24} color="#3498db" />
          <Text style={styles.tabText}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default BottomTab_a;
