import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as Progress from 'react-native-progress';
import { JobCard, BottomTab_a } from '../../components';
import styles from './home_a.style';

const jobDataInitial = [
  {
    id: '1',
    title: '[충남 아산점]노티드',
    info_time: '시간 10:00~14:00',
    info_pay: '시급 12,000원',
    tag: '주방',
    status: '지원중',
    image: require('../../../assets/knotted.jpg')
  },
  {
    id: '2',
    title: '[충남 아산점]CU',
    info_time: '시간 10:00~14:00',
    info_pay: '시급 12,000원',
    tag: '매장관리',
    status: '완료',
    image: require('../../../assets/cu.jpg')
  },
  {
    id: '3',
    title: '[충남 아산점]고클린',
    info_time: '시간 10:00~14:00',
    info_pay: '시급 12,000원',
    tag: '사무보조',
    status: '알바예정',
    image: require('../../../assets/goclean.jpg')
  },
  {
    id: '4',
    title: '[서울 강남점]스타벅스',
    info_time: '시간 10:00~14:00',
    info_pay: '시급 12,000원',
    tag: '매장관리',
    status: '지원중',
    image: require('../../../assets/starbucks.jpg')
  },
  {
    id: '5',
    title: '[서울 종로점]맥도날드',
    info_time: '시간 08:00~12:00',
    info_pay: '시급 9,000원',
    tag: '서비스',
    status: '지원중',
    image: require('../../../assets/mcdonald.jpg')
  },
];

const adData = [
  {
    id: 'ad1',
    title: '주말 야간 알바 구인',
    image: require('../../../assets/gs25.jpg'), 
    daysLeft: 5,
  },
  {
    id: 'ad2',
    title: '평일 오전 파트 구인',
    image: require('../../../assets/cu.jpg'),
    daysLeft: 3,
  },
];

const screenWidth = Dimensions.get('window').width;

const HomeA = () => {
  const [jobData, setJobData] = useState(jobDataInitial);
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const handleMyPagePress = () => {
    router.push('parttimer/home/myinfomation/mypage');
  };

  const handleReviewPress = (item) => {
    router.push({
      pathname: 'parttimer/home/review',
      params: {
        headerImage: item.image,
        header: item.title,
        id: item.id,
      },
    });
  };

  const handleDeleteJob = (id) => {
    Alert.alert(
      "삭제 확인",
      "아직 평가가 완료되지 않았습니다. 정말 삭제하시겠습니까?",
      [
        { text: "아니오", style: "cancel" },
        { text: "예", onPress: () => {setJobData(prevData => prevData.filter(job => job.id !== id))} }
      ]
    );
  };

  const renderAdCard = ({ item }) => (
    <View style={styles.adCard}>
      <Image source={item.image} style={styles.adImage} />
      <Text style={styles.adTitle}>{item.title}</Text>
      <View style={styles.adDaysContainer}>
        <Text style={styles.adDaysText}>D-{item.daysLeft}</Text>
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

  const pagedJobData = chunkData(jobData, 4);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>BaroJob</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleMyPagePress}>
              <Image source={require('../../../assets/mypage.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.attendanceContainer}>
          <Text style={styles.userText}>홍길동님 🎖</Text>
          <View style={styles.profileRow}>
            <Image source={require('../../../assets/profile.png')} style={styles.profileImage} />
            <View style={styles.progressColumn}>
              <Text style={styles.monthText}>12월의 출근</Text>
              <Progress.Bar
                progress={0.4}
                width={180}
                color="#6EA8DA"
                unfilledColor="#E0E0E0"
                borderRadius={5}
                style={styles.progressBar}
              />
            </View>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circleItem}>
              <Progress.Circle size={60} progress={0.8} showsText={true} color="#6EA8DA" unfilledColor="#E0E0E0" thickness={5} />
              <Text style={styles.circularLabel}>근무시간</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress.Circle size={60} progress={0.6} showsText={true} color="#6EA8DA" unfilledColor="#E0E0E0" thickness={5} />
              <Text style={styles.circularLabel}>목표금액</Text>
            </View>
            <View style={styles.circleItem}>
              <Progress.Circle size={60} progress={0.9} showsText={true} color="#6EA8DA" unfilledColor="#E0E0E0" thickness={5} />
              <Text style={styles.circularLabel}>매너온도</Text>
            </View>
          </View>
        </View>

        <View style={styles.myJobsContainer}>
          <Text style={styles.myJobsTitle}>나의 알바</Text>
          <FlatList
            data={pagedJobData}
            renderItem={({ item }) => (
              <View style={styles.pageContainer}>
                {item.map((job) => (
                  <View key={job.id} style={styles.jobCardWrapper}>
                    <JobCard item={job} onDelete={handleDeleteJob} onReviewPress={handleReviewPress} />
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
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>현재 진행중인 알바가 없습니다.</Text>
              </View>
            }
            contentContainerStyle={{ flexGrow: 1}}
          />
          <View style={styles.pageIndicator}>
            {pagedJobData.map((_, index) => (
              <View key={index} style={[styles.indicatorDot, currentPage === index && styles.activeDot]} />
            ))}
          </View>
        </View>

        <View style={styles.adContainer}>
          <Text style={styles.adSectionTitle}>바로잡 프리미엄 광고</Text>
          <FlatList
            data={adData}
            renderItem={renderAdCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>현재 광고가 존재하지 않습니다.</Text>
              </View>
            }
            contentContainerStyle={{ flexGrow: 1}}
          />
        </View>
      </ScrollView>
      <BottomTab_a />
    </View>
  );
};

export default HomeA;