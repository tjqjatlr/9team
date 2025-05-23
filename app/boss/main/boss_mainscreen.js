import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Boss_BottomTab,ParttimerCard} from '../../components_b'; 
import { useRouter } from 'expo-router';
import styles from './boss_mainscreen.style';


const Boss_MainScreen = () => {
  const applicants = [
  { id: '1', title: '안성재', info_time: '시간 19:00~23:00', info_pay: '시급 20,000원', tag: '조리', status: '대기중', image: require('../../../assets/Profile2.jpg') },
  { id: '2', title: '최강록', info_time: '시간 19:00~23:00', info_pay: '시급 20,000원', tag: '조리', status: '승인필요', image: require('../../../assets/Profile4.jpg') },
  { id: '3', title: '백종원', info_time: '시간 12:00~18:00', info_pay: '시급 18,000원', tag: '서빙', status: '종료', image: require('../../../assets/Profile1.jpg') },
  { id: '4', title: '김하늘', info_time: '시간 10:00~14:00', info_pay: '시급 15,000원', tag: '주방', status: '대기중', image: require('../../../assets/profile.png') },
  { id: '5', title: '이유진', info_time: '시간 11:00~15:00', info_pay: '시급 18,500원', tag: '서빙', status: '승인필요',  image: require('../../../assets/profile.png') },
];
  const screenWidth = Dimensions.get('window').width; 
  const [currentPage, setCurrentPage] = useState(0); 
  const [parttimerData, setparttimerData] = useState(applicants);
  const router = useRouter();

  const handleDeleteJob = (id) => {
    Alert.alert(
      "삭제 확인",
      "아직 평가가 완료되지 않았습니다. 정말 삭제하시겠습니까?",
      [
        { text: "아니오", style: "cancel" },
        { text: "예", onPress: () => {setparttimerData(prevData => prevData.filter(job => job.id !== id))} }
      ]
    );
  };

  const handleReviewPress = (item) => {
    router.push({
      pathname: 'boss/main/parttimercard/reviewscreen',
      params: {
        headerImage: item.image,
        header: item.title,
        id: item.id,
      },
    });
  };


  const chunkData = (data, size) => {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  const pagedJobData = chunkData(parttimerData, 4);

 

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* 상단 로고와 마이페이지 아이콘 */}
        <View style={styles.header}>
          <Text style={styles.logo}>BaroJob</Text>
          <TouchableOpacity onPress={() => router.push('boss/main/mypage/mypagescreen')}>
            <Icon name="person-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 사장님 프로필 */}
        <View style={styles.profileSection}>
          <Image source={require('../../../assets/Profile3.jpg')} style={styles.profileImage} />
          <Text style={styles.profileName}>정지선</Text>
        </View>

        {/* 채용 배너 - 슬라이드 가능 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recruitmentBanner}>
          <View style={styles.recruitmentItem}>
            <Text style={styles.recruitmentText}>원하는 날짜에만 일할 사람 채용하기</Text>
            <TouchableOpacity style={styles.recruitButton} onPress={() => router.push('boss/main/hiring/jobselectionscreen')}>
              <Text style={styles.recruitButtonText}>채용 시작하기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recruitmentItem}>
            <Text style={styles.recruitmentText}>한달 이상 일할 사람 채용하기</Text>
            <Text style={styles.serviceText}>장기전용 서비스</Text>
          </View>
        </ScrollView>


        {/* 지원자 진행 상태 - 2x2 그리드 with horizontal scrolling */}
        <View style={styles.myJobsContainer}>
          <Text style={styles.myJobsTitle}>티엔미미 탕정점</Text>
          <FlatList
            data={pagedJobData}
            renderItem={({ item }) => (
              <View style={styles.pageContainer}>
                {item.map((job) => (
                  <View key={job.id} style={styles.jobCardWrapper}>
                    <ParttimerCard item={job} onDelete={handleDeleteJob} onReviewPress={handleReviewPress} />
                  </View>
                ))}
              </View>
            )}
            keyExtractor={(item, index) => `page_${index}`}
            horizontal
            pagingEnabled
            snapToAlignment="start"
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const newPage = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
              setCurrentPage(newPage);
            }}
          />
          <View style={styles.pageIndicator}>
            {pagedJobData.map((_, index) => (
              <View key={index} style={[styles.indicatorDot, currentPage === index && styles.activeDot]} />
            ))}
          </View>
        </View>

        {/* 하단 버튼들 */}
        <View style={styles.actionButtons}>
          <TouchableOpacity  style={styles.button} onPress={() => router.push('boss/main/posting/jobpostionsscreen')}>
            <Icon name="folder-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>나의 공고문</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={() => router.push('boss/a')}>
            <Icon name="cash-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>요금제</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={() => router.push('boss/a')}>
            <Icon name="wallet-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>급여지급</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={() => router.navigate('boss/a')}>
            <Icon name="megaphone-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>공지사항</Text>
          </TouchableOpacity>
        </View>

        {/* 이벤트 안내 배너 */}
        <View style={styles.eventBanner}>
          <Text style={styles.bannerText}>이벤트 종료 및 서비스 이용료 조정 안내 드립니다</Text>
        </View>
      </ScrollView>

      <Boss_BottomTab/>
    </View>
  );
};

export default Boss_MainScreen;
