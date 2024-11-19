import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './endtimeselectionscreen.style';
import { useRouter } from 'expo-router';
export default function EndTimeSelectionScreen() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEndTime, setSelectedEndTime] = useState("종료시간 선택");
  const [selectedBreakType, setSelectedBreakType] = useState("무급");
  const [selectedBreakTime, setSelectedBreakTime] = useState(30); // 휴게시간 기본값 30분
  const goToNextScreen = () => {
    if (1) {
      router.push('boss/wageselectionscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  };

  // 시작 시간 설정 (예: 23시 30분)
  const startHour = 23;
  const startMinute = 30;

  const [endHour, setEndHour] = useState(startHour);
  const [endMinute, setEndMinute] = useState(startMinute);

  const [totalWorkTime, setTotalWorkTime] = useState(0); // 총 근무시간 (분)
  const [netWorkTime, setNetWorkTime] = useState(0); // 실 근무시간 (분)

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const calculateWorkTimes = (newHour, newMinute) => {
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = newHour * 60 + newMinute;
    const calculatedWorkTime = (endTotalMinutes - startTotalMinutes + 1440) % 1440; // 다음날 넘어가는 시간 계산

    setTotalWorkTime(calculatedWorkTime);
    setNetWorkTime(calculatedWorkTime - selectedBreakTime); // 휴게시간을 뺀 실 근무시간
  };

  const confirmEndTimeSelection = () => {
    const formattedEndTime = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;
    setSelectedEndTime(formattedEndTime);
    calculateWorkTimes(endHour, endMinute);
    closeModal();
  };
  const handleTimeChange = (increment) => {
    if (increment === 0) {
      // 초기화 기능
      setEndHour(startHour);
      setEndMinute(startMinute);
      setSelectedEndTime(`${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`);
      setNetWorkTime(0); // 초기화 시 실 근무시간도 초기화
    } else {
      // 시간 증가 기능
      let newMinute = endMinute + increment;
      let newHour = endHour;
  
      if (newMinute >= 60) {
        newHour += Math.floor(newMinute / 60);
        newMinute = newMinute % 60;
      }
      newHour = newHour % 24;
  
      setEndHour(newHour);
      setEndMinute(newMinute);
  
      // 실시간으로 실 근무시간 업데이트
      const formattedEndTime = `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`;
      setSelectedEndTime(formattedEndTime);
      
      // 총 근무시간 및 실 근무시간 다시 계산
      calculateWorkTimes(newHour, newMinute);
    }
  };

  return (
    <View style={styles.container}>
    {/* Header router.push 경로 나중에 수정할 것 */}
    <View style={styles.header}>
        <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push('boss/jobtimeselectionscreen')}> 
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>구인글 등록</Text>
    </View>

    {/* Progress Bar */}
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: '66%' }]} />
    </View>

    {/* Content */}
    <View style={styles.contentContainer}>
      <Text style={styles.label}>근무시간</Text>
      <Text style={styles.timeText}>시작시간: {`${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`}</Text>
      <TouchableOpacity style={styles.selectButton} onPress={openModal}>
        <Text style={styles.selectButtonText}>{selectedEndTime}</Text>
      </TouchableOpacity>
      <Text style={styles.durationText}>
        총 {Math.floor(totalWorkTime / 60)}시간 {totalWorkTime % 60}분 근무 예정 (휴게시간 {selectedBreakTime}분 포함)
      </Text>

      {/* 법정 휴게시간 안내 */}
      <Text style={styles.infoText}>
        근로기준법 제52조 제1항에 따라 근무시간이 4시간인 경우에는 30분 이상, 8시간인 경우에는 1시간 이상 휴게시간을 근무시간 도중에 주어야 합니다.
      </Text>

      
    </View>

    {/* Next Button */}
    <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>

      {/* End Time Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>근무시간 설정</Text>

            {/* 선택된 시간 실시간 표시 */}
            <View style={styles.timeSummaryContainer}>
              <Text style={styles.selectedTimeText}>
                시작: {`${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`} ~ 종료: {selectedEndTime}
              </Text>
              <Text style={styles.workDurationText}>
                총 근무시간 {Math.floor(totalWorkTime / 60)}시간 {totalWorkTime % 60}분
              </Text>
              <Text style={styles.breakDurationText}>
                실 근무시간 {Math.floor(netWorkTime / 60)}시간 {netWorkTime % 60}분 / 휴게시간 {selectedBreakTime}분 ({selectedBreakType})
              </Text>
            </View>

            {/* 시간 추가 버튼들 */}
            <View style={styles.timeButtonsContainer}>
              <TouchableOpacity style={styles.timeButton} onPress={() => handleTimeChange(0)}>
                <Text style={styles.timeButtonText}>초기화</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.timeButton} onPress={() => handleTimeChange(30)}>
                <Text style={styles.timeButtonText}>+30분</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.timeButton} onPress={() => handleTimeChange(60)}>
                <Text style={styles.timeButtonText}>+1시간</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.timeButton} onPress={() => handleTimeChange(240)}>
                <Text style={styles.timeButtonText}>+4시간</Text>
              </TouchableOpacity>
            </View>

            {/* 휴게시간 설정 */}
            <Text style={styles.breakLabel}>휴게시간을 설정해주세요</Text>
            <View style={styles.breakSettingsContainer}>
              <View style={styles.breakTypeContainer}>
                <TouchableOpacity
                  style={[styles.breakTypeButton, selectedBreakType === "무급" && styles.selectedBreakTypeButton]}
                  onPress={() => setSelectedBreakType("무급")}
                >
                  <Text style={styles.breakTypeText}>무급</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.breakTypeButton, selectedBreakType === "유급" && styles.selectedBreakTypeButton]}
                  onPress={() => setSelectedBreakType("유급")}
                >
                  <Text style={styles.breakTypeText}>유급</Text>
                </TouchableOpacity>
              </View>

              <Picker
                selectedValue={selectedBreakTime}
                style={styles.breakTimePicker}
                itemStyle={{ color: '#000000' }} // sdk 52 버전에 따른 오류 수정
                onValueChange={(itemValue) => {
                  setSelectedBreakTime(itemValue);
                  setNetWorkTime(totalWorkTime - itemValue); // 휴게시간 변경 시 실 근무시간 업데이트
                }}
              >
                {[30, 60, 90, 120].map((time) => (
                  <Picker.Item key={time} label={`${time}분`} value={time} />
                ))}
              </Picker>
            </View>


            {/* 확인 버튼 */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmEndTimeSelection}
            >
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
