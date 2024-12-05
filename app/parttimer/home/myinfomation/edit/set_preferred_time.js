import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './set_preferred_time.style';

const SetPreferredTime = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDayIndifferent, setIsDayIndifferent] = useState(false);
  const [isTimeIndifferent, setIsTimeIndifferent] = useState(false);

  const router = useRouter();

  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const timePeriods = ['오전', '오후', '저녁', '새벽'];

  const toggleDay = (day) => {
    if (isDayIndifferent) return; 
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else if (selectedDays.length < 3) {
      setSelectedDays([...selectedDays, day]);
    } else {
      Alert.alert('알림', '최대 3개의 요일만 선택 가능합니다.');
    }
  };

  const handleSave = () => {
    if (!isDayIndifferent && selectedDays.length === 0) {
      Alert.alert('알림', '선호 요일을 선택하거나 "상관없음"을 활성화해주세요.');
      return;
    }
    if (!isTimeIndifferent && !selectedTime) {
      Alert.alert('알림', '선호 시간을 선택하거나 "상관없음"을 활성화해주세요.');
      return;
    }

    const result = `선호 요일: ${isDayIndifferent ? '상관없음' : selectedDays.join(', ')}\n선호 시간: ${isTimeIndifferent ? '상관없음' : selectedTime}`;
    Alert.alert('저장 완료', result);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>선호시간 설정</Text>

      {/* 요일 선택 */}
      <Text style={styles.label}>선호 요일</Text>
      <View style={styles.daysContainer}>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && !isDayIndifferent && styles.selectedDayButton,
            ]}
            onPress={() => toggleDay(day)}
            disabled={isDayIndifferent} 
          >
            <Text
              style={[
                styles.dayButtonText,
                selectedDays.includes(day) && !isDayIndifferent && styles.selectedDayButtonText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
          <TouchableOpacity
          style={[styles.dayButton, isDayIndifferent && styles.selectedDayButton]}
          onPress={() => {
            setIsDayIndifferent(!isDayIndifferent);
            if (!isDayIndifferent) setSelectedDays([]); 
          }}
        >
          <Text
            style={[
              styles.dayButtonText,
              isDayIndifferent && styles.selectedDayButtonText,
            ]}
          >
            무관
          </Text>
        </TouchableOpacity>
      </View>
      

      {/* 시간 선택 */}
      <Text style={styles.label}>선호 시간</Text>
      <View style={styles.timeContainer}>
        {timePeriods.map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.timeButton,
              selectedTime === period && !isTimeIndifferent && styles.selectedTimeButton,
            ]}
            onPress={() => !isTimeIndifferent && setSelectedTime(period)}
            disabled={isTimeIndifferent}
          >
            <Text
              style={[
                styles.timeButtonText,
                selectedTime === period && !isTimeIndifferent && styles.selectedTimeButtonText,
              ]}
            >
              {period}
            </Text>
          </TouchableOpacity>
        ))}

          <TouchableOpacity
          style={[styles.timeButton, isTimeIndifferent && styles.selectedTimeButton]}
          onPress={() => {
            setIsTimeIndifferent(!isTimeIndifferent);
            if (!isTimeIndifferent) setSelectedTime(null); 
          }}
        >
          <Text
            style={[
              styles.timeButtonText,
              isTimeIndifferent && styles.selectedTimeButtonText,
            ]}
          >
            무관
          </Text>
        </TouchableOpacity>
      </View>
      

      {/* 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetPreferredTime;
