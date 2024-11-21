import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boss_BottomTab from './boss_bottomtab'; 
import styles from './boss_mainscreen.style';
import { useRouter } from 'expo-router';

const Boss_MainScreen = () => {
  const router = useRouter();
  const applicants = [
    
    { id: '1', title: '안성재', subtitle: '[조리] 19:00-23:00 시급 20,000원', info: '', tag: '지원중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '2', title: '최강록', subtitle: '[조리] 19:00-23:00 시급 20,000원', info: '', tag: '대기중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '3', title: '백종원', subtitle: '[서빙] 12:00-18:00 시급 18,000원', info: '', tag: '확정', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '4', title: '김하늘', subtitle: '[주방보조] 10:00-14:00 시급 15,000원', info: '', tag: '지원중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '5', title: '이유진', subtitle: '[서빙] 11:00-15:00 시급 18,500원', info: '', tag: '지원중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '6', title: '박영민', subtitle: '[조리] 14:00-20:00 시급 19,000원', info: '', tag: '대기중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '7', title: '정수빈', subtitle: '[서빙] 09:00-13:00 시급 16,000원', info: '', tag: '확정', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '8', title: '홍길동', subtitle: '[배달] 18:00-22:00 시급 17,500원', info: '', tag: '지원중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '9', title: '이상훈', subtitle: '[청소] 07:00-11:00 시급 14,000원', info: '', tag: '확정', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
  { id: '10', title: '박서연', subtitle: '[서빙] 15:00-19:00 시급 18,200원', info: '', tag: '대기중', type: '', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
];
  const screenWidth = Dimensions.get('window').width; 
  const [currentPage, setCurrentPage] = useState(0); 

  const renderJobCard = ({ item }) => (
    <View style={styles.jobCard}>
      <Image source={item.image} style={styles.jobImage} />
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobSubtitle}>{item.subtitle}</Text>
        {item.info && <Text style={styles.jobInfo}>{item.info}</Text>}
      </View>
      <View style={styles.jobTagContainer}>
        <Text style={styles.jobTag}>{item.tag || item.status}</Text>
        {item.type && <Text style={styles.jobType}>{item.type}</Text>}
      </View>
    </View>
  );

  const chunkData = (data, size) => {
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  const pagedJobData = chunkData(applicants, 4);

 

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* 상단 로고와 마이페이지 아이콘 */}
        <View style={styles.header}>
          <Text style={styles.logo}>BaroJob</Text>
          <TouchableOpacity onPress={() => router.push('boss/mypagescreen')}>
            <Icon name="person-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* 사장님 프로필 */}
        <View style={styles.profileSection}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUhokW7-Dmb7_J3adfQutjyKZUe4P99J4PQ&s' }} style={styles.profileImage} />
          <Text style={styles.profileName}>사장님 이름</Text>
        </View>

        {/* 채용 배너 - 슬라이드 가능 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recruitmentBanner}>
          <View style={styles.recruitmentItem}>
            <Text style={styles.recruitmentText}>원하는 날짜에만 일할 사람 채용하기</Text>
            <TouchableOpacity style={styles.recruitButton} onPress={() => router.push('boss/jobselectionscreen')}>
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
                    {renderJobCard({ item: job })}
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
          <TouchableOpacity  style={styles.button} onPress={() => router.push('boss/jobpostionsscreen')}>
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

      <Boss_BottomTab />
    </View>
  );
};

export default Boss_MainScreen;
