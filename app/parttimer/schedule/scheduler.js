import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BottomTab_a } from '../../components'
import styles from './scheduler.style';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const workRecords = {
    '2024-10-17': [
      {
        company: '노티드',
        location: '[노티드 충남 아산점] 조리',
        time: '19:00-23:00',
        wage: '시급 20,000원',
        image: require('../../../assets/knotted.jpg'),
      },
      {
        company: '노티드',
        location: '[노티드 충남 아산점] 조리',
        time: '19:00-23:00',
        wage: '시급 20,000원',
        image: require('../../../assets/knotted.jpg'),
      },
      {
        company: '노티드',
        location: '[노티드 충남 아산점] 조리',
        time: '19:00-23:00',
        wage: '시급 20,000원',
        image: require('../../../assets/knotted.jpg'),
      },
      {
        company: '노티드',
        location: '[노티드 충남 아산점] 조리',
        time: '19:00-23:00',
        wage: '시급 20,000원',
        image: require('../../../assets/knotted.jpg'),
      },
      {
        company: '노티드',
        location: '[노티드 충남 아산점] 조리',
        time: '19:00-23:00',
        wage: '시급 20,000원',
        image: require('../../../assets/knotted.jpg'),
      },
    ],
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const renderWorkRecord = () => {
    const records = workRecords[selectedDate];
    const formattedDate = dayjs(selectedDate).format('YY년 MM월 DD일');

    return (
      <View style={styles.recordContainer}>
        <Text style={styles.selectedDate}>{formattedDate}</Text>
        {records ? (
          records.map((record, index) => (
            <View key={index}>
              <View style={styles.workRecordContainer}>
                <Image source={record.image} style={styles.image} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.company}>{record.company}</Text>
                  <Text style={styles.location}>{record.location}</Text>
                  <Text style={styles.time}>{`${record.time} ${record.wage}`}</Text>
                  <Text style={styles.tag}>주방</Text>
                </View>
              </View>
              {index < records.length - 1 && <View style={styles.recordDivider} />}
            </View>
          ))
        ) : (
          <Text style={styles.noRecord}>해당 날짜에 근무기록이 없습니다.</Text>
        )}
      </View>
    );
  };

  // 근무 일정이 있는 날짜를 markedDates에 마킹하기
  const markedDates = Object.keys(workRecords).reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: '#FF6B6B', // 근무 일정이 있는 날짜는 빨간 점으로 표시
      selectedColor: '#6B4EFF', // 선택된 날짜의 배경색
    };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => handleDateSelect(day.dateString)}
        markedDates={{
          ...markedDates,
          [selectedDate]: { selected: true, marked: true, selectedColor: '#6B4EFF' },
        }}
        theme={{
          todayTextColor: '#6B4EFF',
          arrowColor: '#6B4EFF',
          monthTextColor: '#6B4EFF',
        }}
        monthFormat={'MM월'}
        firstDay={0}
        locale={'ko'}
      />
      <View style={styles.divider} />
      <ScrollView style={styles.recordDisplay} contentContainerStyle={{ paddingBottom: 80 }}>
        {renderWorkRecord()}
      </ScrollView>
      <BottomTab_a/>
    </View>
  );
};

export default Scheduler;
