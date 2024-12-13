import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { BottomTab_a } from '../../components';
import styles from './findparttimer.style';

{/* 샘플 구인 목록 데이터 */}
const jobListings = [
  {
    id: '1',
    title: '노티드',
    subtitle: '[노티드 충남 아산점] 조리',
    address: '충남 천안시 동남구 만남로 43 B관 4층',
    time: '19:00~23:00',
    wage: '시급 20,000원',
    image: require('../../../assets/knotted.jpg'),
    tag: '주방',
    isBookmarked: true,
    startDate: '2024-12-12',
    latitude: 36.8141,
    longitude: 127.1111,
  },
  {
    id: '2',
    title: '고클린',
    subtitle: '[고클린 충남 아산점] 문서작성',
    address: '충남 아산시 신창면 온천대로 1058 양우아파트상가115동206호',
    time: '09:00~12:00',
    wage: '시급 10,000원',
    image: require('../../../assets/goclean.jpg'),
    tag: '사무보조',
    isBookmarked: false,
    startDate: '2024-12-12',
    latitude: 36.7946,
    longitude: 127.1143,
  },
  {
    id: '3',
    title: 'CU',
    subtitle: '[CU 충남 아산점] 상품포장',
    address: '충남 아산시 탕정면 선문로221번길 38-9 (매곡리)',
    time: '19:00~23:00',
    wage: '시급 9,900원',
    image: require('../../../assets/cu.jpg'),
    tag: '매장관리',
    isBookmarked: false,
    startDate: '2024-12-13',
    latitude: 36.8000,
    longitude: 127.1200,
  },
];

const FindPartTimer = () => {
  const [listings, setListings] = useState(jobListings);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);
  const router = useRouter();

  {/* 날짜 선택기를 위한 날짜 생성 */}
  useEffect(() => {
    const today = new Date();
    const newDates = [];
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const currentMonth = today.getMonth();

    for (let i = 0; i < 21; i++) {
      const currentDate = new Date();
      currentDate.setDate(today.getDate() + i);

      const day = i === 0 ? '오늘' : dayNames[currentDate.getDay()];
      const date = `${currentDate.getDate()}일`;
      const key = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
      const isMonthChanged = currentDate.getMonth() !== currentMonth;

      newDates.push({ key, day, date, isMonthChanged, month: currentDate.getMonth() + 1 });
    }

    setDates(newDates);
  }, []);

  {/* 날짜 선택 토글 함수 */}
  const toggleDateSelection = (key) => {
    setSelectedDate(selectedDate === key ? null : key);
  };

  {/* 현재 월 가져오기 함수 */}
  const getMonth = () => {
    if (selectedDate) {
      const selected = dates.find((d) => d.key === selectedDate);
      return selected ? `${selected.month}월` : '';
    }

    const today = new Date();
    return `${today.getMonth() + 1}월`;
  };

  {/* 현재 날짜에 맞는 공고 필터링 */}
  const filteredListings = selectedDate
    ? listings.filter((item) => item.startDate === selectedDate)
    : listings;

  {/* 북마크 토글 함수 */}
  const toggleBookmark = (id) => {
    setListings((prevListings) =>
      prevListings.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      )
    );
  };

  {/* 구인 항목 렌더링 함수 */}
  const renderJobItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: 'parttimer/findjobs/detail/jobdetail',
          params: { job: JSON.stringify(item) },
        })
      }
      style={styles.jobItem}
    >
      <Image source={item.image} style={styles.jobImage} />
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobSubtitle}>{item.subtitle}</Text>
        <TouchableOpacity
          style={[
            styles.bookmarkContainer,
            item.isBookmarked && styles.bookmarkContainerSelected,
          ]}
          onPress={() => toggleBookmark(item.id)}
        >
          <FontAwesome
            name="heart"
            size={14}
            color={item.isBookmarked ? '#FFFFFF' : '#FF6B6B'}
          />
          <Text
            style={[
              styles.bookmarkText,
              item.isBookmarked && styles.bookmarkTextSelected,
            ]}
          >
            찜
          </Text>
        </TouchableOpacity>
        <View style={styles.jobTimeWage}>
          <Text style={styles.jobTimeWage}>{`${item.time} / ${item.wage}`}</Text>
        </View>
        <Text style={styles.jobTag}>{item.tag}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.location}>충남 아산시</Text>
      </View>

      {/* 날짜 선택기 */}
      <View style={styles.dateSelector}>
        {/* 동적으로 변경되는 달 표시 */}
        <Text style={styles.monthText}>{getMonth()}</Text>

        {/* 날짜 리스트 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateContainerStyle}
        >
          {dates.map(({ key, day, date, isMonthChanged }) => (
            <TouchableOpacity
              key={key}
              onPress={() => toggleDateSelection(key)}
              style={[
                styles.dateContainer,
                selectedDate === key && styles.selectedDateContainer,
                isMonthChanged && styles.monthChangedDateContainer,
              ]}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === key && styles.selectedDateText,
                ]}
              >
                {day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  selectedDate === key && styles.selectedDateText,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 구인 목록 */}
      {filteredListings.length > 0 ? (
        <FlatList
          data={filteredListings}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 60 }}
        />
      ) : (
        <View style={styles.noJobContainer}>
          <Text style={styles.noJobText}>해당 날짜에 공고가 없습니다.</Text>
        </View>
      )}

      <BottomTab_a />
    </View>
  );
};

export default FindPartTimer;
