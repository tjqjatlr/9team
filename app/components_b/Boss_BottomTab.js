import React from 'react';
import { View, Text,  TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import styles from './boss_bottomtab.style';

const Boss_BottomTab = () => {
  const router = useRouter();

  const tabs = [
    { name: '홈', icon: 'home-outline', route: 'boss/main/boss_mainscreen' },
    { name: '인재찾기', icon: 'search-outline', route: 'boss/main/boss_bottomtab/findparttimerscreen' },
    { name: '채팅방', icon: 'chatbubble-ellipses-outline', route: 'boss/main/boss_bottomtab/chatroomscreen' },
    { name: 'AI추천', icon: 'bulb-outline', route: 'boss/main/boss_bottomtab/profilecard' },
    { name: '근무일정', icon: 'calendar-outline', route: 'boss/main/boss_bottomtab/shiftschedulescreen' },
    { name: '찜', icon: 'heart-outline', route: 'boss/main/boss_bottomtab/favoritesscreen' },
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


export default Boss_BottomTab;
