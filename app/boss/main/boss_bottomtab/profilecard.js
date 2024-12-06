import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './profilecard.style';
import { useRouter } from 'expo-router';
import {Boss_BottomTab} from '../../../components_b'; 

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const profiles = [
    {
      id: '1',
      name: '정지선',
      experience: '2년',
      strength: '책임감',
      personality: '성실함',
      mbti: 'INFJ',
      preferredHours: '주말 오전',
      image: require('../../../../assets/Profile3.jpg'),
    },
    {
      id: '2',
      name: '안성재',
      experience: '1년',
      strength: '빠른 적응력',
      personality: '활발함',
      mbti: 'ENTP',
      preferredHours: '평일 저녁',
      image: require('../../../../assets/Profile2.jpg'),
    },
    {
      id: '3',
      name: '백종원',
      experience: '3년',
      strength: '친절함',
      personality: '배려심 많음',
      mbti: 'ISFJ',
      preferredHours: '주중 오전',
      image: require('../../../../assets/Profile1.jpg'),
    },
    {
      id: '4',
      name: '최강록',
      experience: '6개월',
      strength: '창의성',
      personality: '긍정적',
      mbti: 'INTP',
      preferredHours: '주중 오후',
      image: require('../../../../assets/Profile4.jpg'),
    },
    {
      id: '5',
      name: '최민수',
      experience: '5년',
      strength: '시간 준수',
      personality: '냉철함',
      mbti: 'ESTJ',
      preferredHours: '야간 근무',
      image: require('../../../../assets/profile.png'),
    },
    {
      id: '6',
      name: '정하영',
      experience: '2년',
      strength: '문제 해결 능력',
      personality: '신중함',
      mbti: 'ISTP',
      preferredHours: '주말 오후',
      image: require('../../../../assets/profile.png'),
    },
    {
      id: '7',
      name: '김나희',
      experience: '1년 6개월',
      strength: '유연한 사고',
      personality: '외향적',
      mbti: 'ENFP',
      preferredHours: '주중 저녁',
      image: require('../../../../assets/profile.png'),
    },
  ];

  const ProfileCard = ({ profile }) => (
    <View style={styles.card(screenWidth)}>
      {/* 프로필 사진과 이름 */}
      <View style={styles.profileSection}>
        <Text style={styles.name}>{profile.name} 알바님</Text>
        <Image source={profile.image} style={styles.profileImage} />
      </View>
  

      {/* 정보 카드 */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>알바 경험: {profile.experience}</Text>
        <Text style={styles.infoText}>장점: {profile.strength}</Text>
        <Text style={styles.infoText}>성격: {profile.personality}</Text>
        <Text style={styles.infoText}>MBTI: {profile.mbti}</Text>
        <Text style={styles.infoText}>희망 업무시간: {profile.preferredHours}</Text>
      </View>
  
      {/* 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.likeButton}>
          <Text style={styles.buttonText}>찜 ❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.proposeButton}>
          <Text style={styles.buttonText}>제안하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  
  export default function App() {
    const renderItem = ({ item }) => <ProfileCard profile={item} />;
    const router = useRouter();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>AI 매칭</Text>
      </View>
      {/* 새로운 텍스트 추가 */}
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>오른쪽으로 넘기며 알바생을 찾아보세요!</Text>
      </View>

        <FlatList
          data={profiles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Boss_BottomTab/>
      </View>
    );
  }