import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import styles from './profilecard.style_a';
import { useRouter } from 'expo-router';
import Boss_BottomTab_a from './BottomTab_a'; 

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


  const profiles = [
    {
      id: '1',
      name: '지선 편의점',
      date: '2024년 12월 1일',
      work: '매장 관리',
      preferredMBTI: 'INFJ',
      feature: '책임감 있고 세심함',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUhokW7-Dmb7_J3adfQutjyKZUe4P99J4PQ&s',
    },
    {
      id: '2',
      name: '철수 마트',
      date: '2024년 12월 5일',
      work: '재고 관리',
      preferredMBTI: 'ENTP',
      feature: '결단력과 적응력이 뛰어남',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
    {
      id: '3',
      name: '영희 카페',
      date: '2024년 12월 3일',
      work: '고객 응대',
      preferredMBTI: 'ISFJ',
      feature: '배려심 많고 친절함',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
    {
      id: '4',
      name: '준형 의류점',
      date: '2024년 12월 7일',
      work: '매장 디스플레이',
      preferredMBTI: 'INTP',
      feature: '창의적이고 유연한 사고',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
    {
      id: '5',
      name: '민수 PC방',
      date: '2024년 12월 2일',
      work: '야간 청소 및 정리',
      preferredMBTI: 'ESTJ',
      feature: '시간 엄수와 냉철함',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
    {
      id: '6',
      name: '하영 서점',
      date: '2024년 12월 6일',
      work: '고객 불만 처리',
      preferredMBTI: 'ISTP',
      feature: '신중하고 문제 해결 능력 우수',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
    {
      id: '7',
      name: '나희 꽃집',
      date: '2024년 12월 4일',
      work: '프로모션 기획',
      preferredMBTI: 'ENFP',
      feature: '창의적이고 외향적',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
    },
  ];
  
  const ProfileCard = ({ profile }) => (
    <View style={styles.card(screenWidth)}>
      {/* 프로필 사진과 이름 */}
      <View style={styles.profileSection}>
        <Text style={styles.name}>{profile.name}</Text>
        <Image source={{ uri: profile.image }} style={styles.profileImage} />
      </View>
  
      {/* 정보 카드 */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>근무 날짜: {profile.date}</Text>
        <Text style={styles.infoText}>업무: {profile.work}</Text>
        <Text style={styles.infoText}>희망 MBTI: {profile.preferredMBTI}</Text>
        <Text style={styles.infoText}>우대 사항: {profile.feature}</Text>
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
          <Text style={styles.subtitle}>오른쪽으로 넘기며 사장님을 찾아보세요!</Text>
        </View>
  
        <FlatList
          data={profiles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Boss_BottomTab_a />
      </View>
    );
  }
  