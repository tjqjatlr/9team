import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './findparttimerscreen.style';
import Boss_BottomTab from './boss_bottomtab';

const FindPartTimerScreen = () => {
  const applicants = [
    { id: '1', name: '안성재', age: 42, personality: '???', status: '접속중', message: '저는 부지런하답니다 연락 주세요', type: '찜', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    { id: '2', name: '최강록', age: 45, personality: 'ISFJ', status: '3분전', message: '일할 준비 만빵! 연락주세요', type: '찜', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    { id: '3', name: '백종원', age: 58, personality: 'ENTJ', status: '1시간 전', message: '알바 경험 많습니다! 연락 주세요!', type: '찜', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  ];

  const renderApplicant = ({ item }) => (
    <View style={styles.applicantCard}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: item.image }} style={styles.profileImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="heart-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name} ({item.age}세)</Text>
        <Text style={styles.message}>{item.message}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.personality}>{item.personality}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>알바 찾기</Text>
      </View>

      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>충남 아산시</Text>
        <Icon name="chevron-down" size={18} color="#000" />
      </View>

      {/* Filter Section */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>성별</Text>
          <Icon name="chevron-down" size={12} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>나이</Text>
          <Icon name="chevron-down" size={12} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>접속</Text>
          <Icon name="chevron-down" size={12} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Applicant List */}
      <FlatList
        data={applicants}
        renderItem={renderApplicant}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Tab */}
      <Boss_BottomTab />
    </View>
  );
};

export default FindPartTimerScreen;
