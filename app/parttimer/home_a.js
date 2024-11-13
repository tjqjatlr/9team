import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import * as Progress from 'react-native-progress';
import BottomTab_a from './BottomTab_a';
import styles from './home_a.style';

const jobData = [
  {
    id: '1',
    title: '노티드',
    subtitle: '[노티드 충남 아산점] 조리',
    info: '19:00~23:00 시급 20,000원',
    tag: '지원중',
    type: '주방',
    image: require('../../assets/knotted.jpg')
  },
  {
    id: '2',
    title: 'CU',
    subtitle: '[CU 충남 아산점] 상품진열',
    tag: '평가',
    status: '완료',
    image: require('../../assets/cu.jpg')
  },
  {
    id: '3',
    title: '고클린',
    subtitle: '[고클린 충남 아산점] 문서작성',
    info: '09:00~12:00 시급 10,000원',
    tag: '알바예정',
    type: '사무보조',
    image: require('../../assets/goclean.jpg')
  },
  {
    id: '4',
    title: '스타벅스',
    subtitle: '[스타벅스 서울 강남점] 바리스타',
    info: '10:00~14:00 시급 12,000원',
    tag: '진행중',
    type: '매장관리',
    image: require('../../assets/starbucks.jpg')
  },
  {
    id: '5',
    title: '맥도날드',
    subtitle: '[맥도날드 서울 종로점] 카운터',
    info: '08:00~12:00 시급 9,000원',
    tag: '지원중',
    type: '서비스',
    image: require('../../assets/mcdonald.jpg')
  },
  {
    id: '6',
    title: '맥도날드',
    subtitle: '[맥도날드 서울 종로점] 카운터',
    info: '08:00~12:00 시급 9,000원',
    tag: '지원중',
    type: '서비스',
    image: require('../../assets/mcdonald.jpg')
  },
  {
    id: '7',
    title: '맥도날드',
    subtitle: '[맥도날드 서울 종로점] 카운터',
    info: '08:00~12:00 시급 9,000원',
    tag: '지원중',
    type: '서비스',
    image: require('../../assets/mcdonald.jpg')
  },
  {
    id: '8',
    title: '맥도날드',
    subtitle: '[맥도날드 서울 종로점] 카운터',
    info: '08:00~12:00 시급 9,000원',
    tag: '지원중',
    type: '서비스',
    image: require('../../assets/mcdonald.jpg')
  },
  {
    id: '9',
    title: '맥도날드',
    subtitle: '[맥도날드 서울 종로점] 카운터',
    info: '08:00~12:00 시급 9,000원',
    tag: '지원중',
    type: '서비스',
    image: require('../../assets/mcdonald.jpg')
  },
];

const adData = [
  {
    id: 'ad1',
    title: '주말 야간 알바 구인',
    image: require('../../assets/gs25.jpg'), 
    daysLeft: 5,
  },
  {
    id: 'ad2',
    title: '평일 오전 파트 구인',
    image: require('../../assets/cu.jpg'),
    daysLeft: 3,
  },
  {
    id: 'ad3',
    title: '평일 오전 파트 구인',
    image: require('../../assets/cu.jpg'),
    daysLeft: 3,
  },
  {
    id: 'ad4',
    title: '평일 오전 파트 구인',
    image: require('../../assets/cu.jpg'),
    daysLeft: 3,
  },
  {
    id: 'ad5',
    title: '평일 오전 파트 구인',
    image: require('../../assets/cu.jpg'),
    daysLeft: 3,
  },
  {
    id: 'ad6',
    title: '평일 오전 파트 구인',
    image: require('../../assets/cu.jpg'),
    daysLeft: 3,
  },
  {
    id: 'ad7',
    title: '평일 오전 파트 구인',
    image: require('../../assets/cu.jpg'),
    daysLeft: 3,
  },
];

const screenWidth = Dimensions.get('window').width;

const HomeA = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const navigation = useNavigation();

  const handleMyPagePress = () => {
    navigation.navigate('mypage');
  };

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
            <TouchableOpacity>
              <Image source={require('../../assets/notification.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMyPagePress}>
              <Image source={require('../../assets/mypage.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.attendanceContainer}>
          <Text style={styles.locationText}>충남 아산시</Text>
          <Text style={styles.userText}>홍길동님 🎖</Text>
          <View style={styles.profileRow}>
            <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
            <View style={styles.progressColumn}>
              <Text style={styles.monthText}>10월의 출근</Text>
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

        <View style={styles.adContainer}>
          <Text style={styles.adSectionTitle}>바로잡 프리미엄 광고</Text>
          <FlatList
            data={adData}
            renderItem={renderAdCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <BottomTab_a />
    </View>
  );
};

export default HomeA;