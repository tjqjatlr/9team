import React, { useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './jobpostingscreen.style';
import { useRouter } from 'expo-router';

export default function JobPostingScreen() {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState([]);
  const [recruitmentCount, setRecruitmentCount] = useState(1);

  const toggleDate = (date) => {
    setSelectedDates((prevDates) =>
      prevDates.includes(date)
        ? prevDates.filter((d) => d !== date)
        : [...prevDates, date]
    );
  };

  const incrementCount = () => {
    setRecruitmentCount(recruitmentCount + 1);
  };

  const decrementCount = () => {
    if (recruitmentCount > 1) setRecruitmentCount(recruitmentCount - 1);
  };


  const goToNextScreen = () => {
    if (1) {
      router.push('boss/jobtimeselectionscreen');
    } else {
      alert('날짜를 선택해주세요');
    }
  };
  return (
    <View style={styles.container}>
    {/* Header 나중에 수정*/}
    <View style={styles.header}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>구인글 등록</Text>
    </View>


      {/* 진행 상태 게이지 */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '33%' }]} />
      </View>

      {/* 내용 */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>근무날짜 (최대 7일)</Text>

        {/* 달력 */}
        <Calendar
          onDayPress={(day) => {
            toggleDate(day.dateString);
          }}
          markedDates={selectedDates.reduce((acc, date) => {
            acc[date] = { selected: true, marked: true, selectedColor: '#6B4EFF' }; // Scheduler와 일치하는 색상
            return acc;
          }, {})}
          theme={{
            todayTextColor: '#6B4EFF',         // 오늘 날짜 텍스트 색상
            arrowColor: '#6B4EFF',             // 화살표 색상
            monthTextColor: '#6B4EFF',         // 월 텍스트 색상
            textDayFontFamily: 'System',       // 날짜 텍스트 폰트
            textMonthFontFamily: 'System',     // 월 텍스트 폰트
            textDayHeaderFontFamily: 'System', // 요일 헤더 텍스트 폰트
          }}
          monthFormat={'yyyy년 MM월'}           // 연월 형식을 한국어로
          firstDay={0}                          // 주 시작 요일을 일요일로 설정
          locale={'ko'}                         // 로케일을 한국어로 설정
        />


        {/* 날짜별 모집 인원 */}
        <View style={styles.section}>
          <Text style={styles.label}>날짜별 모집인원</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={decrementCount} style={styles.counterButton}>
              <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{recruitmentCount}</Text>
            <TouchableOpacity onPress={incrementCount} style={styles.counterButton}>
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 다음 버튼 */}
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
