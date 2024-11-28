import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Boss_BottomTab from './boss_bottomtab'; // 하단바 컴포넌트
import styles from './shiftschedulescreen.style';

const ShiftScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const shifts = [
    { id: '1', name: '안성재', job: '[조리] 19:00-23:00', date: '2024-11-07', wage: '시급 20,000원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    { id: '2', name: '최강록', job: '[서빙] 12:00-18:00', date: '2024-11-08', wage: '시급 18,000원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    { id: '3', name: '김하늘', job: '[주방보조] 10:00-14:00', date: '2024-11-09', wage: '시급 15,000원', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s' },
    // 추가 데이터...
  ];

  const filteredShifts = shifts.filter(shift => shift.date === selectedDate);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>근무 일정</Text>
        <TouchableOpacity onPress={() => navigation.navigate('급여계산기')}>
          <View style={styles.calculatorButton}>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8602/8602851.png' }} 
              style={styles.calculatorIcon} 
            />
            <Text style={styles.calculatorText}>급여계산기</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* 화면을 반으로 나누기 */}
      <View style={styles.contentContainer}>
        {/* 캘린더 부분 */}
        <View style={styles.calendarContainer}>
          <Calendar 
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#007BFF' }
            }}
            monthFormat={'yyyy년 MM월'}
            enableSwipeMonths={true}
            theme={{
              todayTextColor: '#007BFF',
              arrowColor: '#007BFF',
              monthTextColor: '#007BFF',
              textDayFontFamily: 'System',
              textMonthFontFamily: 'System',
              textDayHeaderFontFamily: 'System',
            }}
            // 한글 설정
            locale={'ko'}
          />
        </View>

        {/* 알바생 일정 리스트 */}
        <View style={styles.scheduleContainer}>
          {!selectedDate ? (
            <Text style={styles.noShiftsText}>날짜를 선택해주세요</Text>
          ) : (
            <>
              <Text style={styles.selectedDateText}>{selectedDate}의 근무 일정</Text>
              <FlatList
                data={filteredShifts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.shiftCard}>
                    <Image source={{ uri: item.image }} style={styles.shiftImage} />
                    <View style={styles.shiftInfo}>
                      <Text style={styles.shiftName}>{item.name}</Text>
                      <Text style={styles.shiftJob}>{item.job}</Text>
                      <Text style={styles.shiftWage}>{item.wage}</Text>
                    </View>
                  </View>
                )}
                ListEmptyComponent={<Text style={styles.noShiftsText}>해당 날짜에 근무 일정이 없습니다.</Text>}
              />
            </>
          )}
        </View>
      </View>
      
      <Boss_BottomTab />
    </View>
  );
};

export default ShiftScheduleScreen;
