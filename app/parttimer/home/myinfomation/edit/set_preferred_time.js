import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { TimePickerModal } from 'react-native-paper-dates';
import styles from './set_preferred_time.style';

const SetPreferredTime = () => {
  const [selectedDays, setSelectedDays] = useState([]); 
  const [startTime, setStartTime] = useState(null); 
  const [endTime, setEndTime] = useState(null); 
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);
  
  const router = useRouter()

  const days = ['월', '화', '수', '목', '금', '토', '일'];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSave = () => {
    if (!startTime || !endTime || selectedDays.length === 0) {
      Alert.alert('알림', '요일과 시간을 모두 선택해주세요.');
      return;
    }

    Alert.alert(
      '저장 완료',
      `선호 요일: ${selectedDays.join(', ')}\n시작 시간: ${startTime}\n종료 시간: ${endTime}`
    );
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
              selectedDays.includes(day) && styles.selectedDayButton,
            ]}
            onPress={() => toggleDay(day)}
          >
            <Text
              style={[
                styles.dayButtonText,
                selectedDays.includes(day) && styles.selectedDayButtonText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 시간 설정 */}
      <Text style={styles.label}>선호 시간</Text>
      <View style={styles.timeContainer}>
        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setStartPickerVisible(true)}
        >
          <Text style={styles.timeButtonText}>
            {startTime || '시작 시간'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.timeSeparator}>~</Text>

        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setEndPickerVisible(true)}
        >
          <Text style={styles.timeButtonText}>
            {endTime || '종료 시간'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 시간 선택 모달 */}
      <TimePickerModal
        visible={isStartPickerVisible}
        onDismiss={() => setStartPickerVisible(false)}
        onConfirm={(time) => {
          setStartPickerVisible(false);
          setStartTime(`${time.hours}:${time.minutes}`);
        }}
      />
      <TimePickerModal
        visible={isEndPickerVisible}
        onDismiss={() => setEndPickerVisible(false)}
        onConfirm={(time) => {
          setEndPickerVisible(false);
          setEndTime(`${time.hours}:${time.minutes}`);
        }}
      />

      {/* 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetPreferredTime;
