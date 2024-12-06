import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router'; // useRouter 사용
import styles from './findparttimerscreen.style';
import {Boss_BottomTab} from '../../../components_b';
import { FontAwesome } from '@expo/vector-icons';

const FindPartTimerScreen = () => {
  const router = useRouter(); // useRouter 가져오기

  const applicants = [
    { id: '1', name: '안성재', age: 42, personality: '???', status: '접속중', message: '저는 부지런하답니다 연락 주세요', type: '찜',  image: require('../../../../assets/Profile2.jpg') },
    { id: '2', name: '최강록', age: 45, personality: 'ISFJ', status: '3분전', message: '일할 준비 만빵! 연락주세요', type: '찜',  image: require('../../../../assets/Profile4.jpg')},
    { id: '3', name: '백종원', age: 58, personality: 'ENTJ', status: '1시간 전', message: '알바 경험 많습니다! 연락 주세요!', type: '찜',  image: require('../../../../assets/Profile1.jpg')},
  ];

  const [bookmarked, setBookmarked] = useState({});

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id], // 해당 ID의 북마크 상태를 토글
    }));
  };

  const handleApplicantPress = () => {
    // 라우터 푸시로 해당 알바생 상세 페이지로 이동
    router.push('boss/main/parttimerdetail/parttimerdetailscreen');
  };

  const renderApplicant = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleApplicantPress(item)} // 클릭 시 상세 페이지로 이동
      style={styles.applicantCard}
    >
      <View style={styles.profileContainer}>
        <Image source={item.image} style={styles.profileImage} />
        <TouchableOpacity
          style={[
            styles.bookmarkButton,
            bookmarked[item.id] && styles.bookmarkButtonSelected,
          ]}
          onPress={() => toggleBookmark(item.id)}
        >
          <FontAwesome
            name="heart"
            size={20}
            color={bookmarked[item.id] ? '#FFFFFF' : '#FF6B6B'}
          />
          <Text
            style={[
              styles.bookmarkText,
              bookmarked[item.id] && styles.bookmarkTextSelected,
            ]}
          >
            찜
          </Text>
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
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>알바 찾기</Text>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
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
