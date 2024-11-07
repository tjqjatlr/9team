import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boss_BottomTab from './boss_bottomtab'; // 하단바 컴포넌트
import styles from './boss_mainscreen.style';

const Boss_MainScreen = () => {
  const applicants = [
    { id: '1', name: '안성재', job: '[조리] 19:00-23:00 시급 20,000원', status: '지원중', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHHq35En0gJsLg_CCykEeeT23UbyHOdUGGA&s' },
    { id: '2', name: '최강록', job: '[조리] 19:00-23:00 시급 20,000원', status: '대기중', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtiKccrCedXhdMIXtxB6R7PifbaocB7dNTA&s' },
    { id: '3', name: '백종원', job: '[서빙] 12:00-18:00 시급 18,000원', status: '확정', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesvGKorjpW62lgHeh0pdhapt5rfX5bZF2ag&s' },
    { id: '4', name: '김하늘', job: '[주방보조] 10:00-14:00 시급 15,000원', status: '지원중', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    { id: '5', name: '김하늘', job: '[주방보조] 10:00-14:00 시급 15,000원', status: '지원중', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    // Add more applicants if needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>

        {/* 상단 로고와 마이페이지 아이콘 */}
        <View style={styles.header}>
          <Text style={styles.logo}>BaroJob</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MyPaaage')}>
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
            <TouchableOpacity style={styles.recruitButton}>
              <Text style={styles.recruitButtonText}>채용 시작하기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recruitmentItem}>
            <Text style={styles.recruitmentText}>한달 이상 일할 사람 채용하기</Text>
            <Text style={styles.serviceText}>장기전용 서비스</Text>
          </View>
        </ScrollView>

       {/* 지원자 진행 상태 - 2x2 그리드 with horizontal scrolling */}
        <View style={styles.storeSection}>
          <Text style={styles.storeName}>티엔미미 탕정점 (2024.10.12)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.gridContainer}>
              {applicants.map((applicant, index) => (
                <View key={applicant.id} style={styles.applicant}>
                  <Image source={{ uri: applicant.image }} style={styles.applicantImage} />
                  <View style={styles.applicantInfo}>
                    <Text style={styles.nameText}>{applicant.name}</Text>
                    <Text style={styles.jobText}>{applicant.job}</Text>
                  </View>
                  <View style={styles.statusTag}>
                    <Text style={styles.statusText}>{applicant.status}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* 하단 버튼들 */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button}>
            <Icon name="folder-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>나의 공고문</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="cash-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>요금제</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="wallet-outline" size={24} color="#3498db" />
            <Text style={styles.buttonText}>급여지급</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
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
