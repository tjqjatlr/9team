import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Boss_BottomTab = () => {
  const navigation = useNavigation();

  const tabs = [
    { name: '홈', icon: 'home-outline', route: 'boss_mainscreen' },
    { name: '인재찾기', icon: 'search-outline', route: 'FindTalentScreen' },
    { name: '채팅방', icon: 'chatbubble-ellipses-outline', route: 'chatroomscreen' },
    { name: 'AI추천', icon: 'bulb-outline', route: 'AISuggestScreen' },
    { name: '근무일정', icon: 'calendar-outline', route: 'ScheduleScreen' },
    { name: '찜', icon: 'heart-outline', route: 'FavoriteScreen' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => navigation.navigate(tab.route)}
        >
          <Icon name={tab.icon} size={24} color="#3498db" />
          <Text style={styles.tabText}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#000',
  },
});

export default Boss_BottomTab;
