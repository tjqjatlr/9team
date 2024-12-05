import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './edit.jobtimeselectionscreen.style';
import { useRouter } from 'expo-router';

export default function JobTimeSelectionScreen() {
  const router = useRouter();
  const [isStartModalVisible, setIsStartModalVisible] = useState(false);
  const [isEndModalVisible, setIsEndModalVisible] = useState(false);

  const [selectedStartHour, setSelectedStartHour] = useState("00");
  const [selectedStartMinute, setSelectedStartMinute] = useState("00");
  const [selectedStartPeriod, setSelectedStartPeriod] = useState("오전");
  const [selectedStartTime, setSelectedStartTime] = useState("시작시간 선택");

  const [selectedEndHour, setSelectedEndHour] = useState("00");
  const [selectedEndMinute, setSelectedEndMinute] = useState("00");
  const [selectedEndPeriod, setSelectedEndPeriod] = useState("오전");
  const [selectedEndTime, setSelectedEndTime] = useState("종료시간 선택");

  const goToNextScreen = () => {
    if (selectedStartTime !== "시작시간 선택" && selectedEndTime !== "종료시간 선택") {
      router.push('boss/main/hiring/hiring.editpage/editjobscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  };

  const openStartModal = () => setIsStartModalVisible(true);
  const closeStartModal = () => setIsStartModalVisible(false);
  const confirmStartTimeSelection = () => {
    const timeString = `${selectedStartPeriod} ${selectedStartHour}:${selectedStartMinute}`;
    setSelectedStartTime(timeString);
    closeStartModal();
  };

  const openEndModal = () => setIsEndModalVisible(true);
  const closeEndModal = () => setIsEndModalVisible(false);
  const confirmEndTimeSelection = () => {
    const timeString = `${selectedEndPeriod} ${selectedEndHour}:${selectedEndMinute}`;
    setSelectedEndTime(timeString);
    closeEndModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ zIndex: 999 }}
          onPress={() => router.push('boss/main/hiring/hiring.editpage/editjobscreen')}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>구인글 수정</Text>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.label}>근무시간</Text>
        {/* 시작시간 선택 */}
        <TouchableOpacity style={styles.selectButton} onPress={openStartModal}>
          <Text style={styles.selectButtonText}>{selectedStartTime}</Text>
        </TouchableOpacity>

        {/* 종료시간 선택 */}
        <TouchableOpacity style={styles.selectButton} onPress={openEndModal}>
          <Text style={styles.selectButtonText}>{selectedEndTime}</Text>
        </TouchableOpacity>

        <Text style={styles.warningText}>* 시작 시간과 종료 시간을 선택해주세요</Text>
        <Text style={styles.infoText}>
          근무시간의 시작시간은 최소 30분 이상, 끝시간과의 간격이 최소 1시간 이상을 유지하도록 설정해 주어야 합니다.
        </Text>
      </View>

      {/* 시작 시간 선택 Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isStartModalVisible}
        onRequestClose={closeStartModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>시작 시간</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedStartPeriod}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedStartPeriod(itemValue)}
                itemStyle={{ color: '#000000' }}
              >
                <Picker.Item label="오전" value="오전" />
                <Picker.Item label="오후" value="오후" />
              </Picker>
              <Picker
                selectedValue={selectedStartHour}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedStartHour(itemValue)}
                itemStyle={{ color: '#000000' }}
              >
                {[...Array(12).keys()].map((i) => (
                  <Picker.Item label={`${i + 1}`} value={`${i + 1}`} key={i} />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedStartMinute}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedStartMinute(itemValue)}
                itemStyle={{ color: '#000000' }}
              >
                {["00", "15", "30", "45"].map((m, index) => (
                  <Picker.Item label={m} value={m} key={index} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmStartTimeSelection}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 종료 시간 선택 Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isEndModalVisible}
        onRequestClose={closeEndModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>종료 시간</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedEndPeriod}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedEndPeriod(itemValue)}
                itemStyle={{ color: '#000000' }}
              >
                <Picker.Item label="오전" value="오전" />
                <Picker.Item label="오후" value="오후" />
              </Picker>
              <Picker
                selectedValue={selectedEndHour}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedEndHour(itemValue)}
                itemStyle={{ color: '#000000' }}
              >
                {[...Array(12).keys()].map((i) => (
                  <Picker.Item label={`${i + 1}`} value={`${i + 1}`} key={i} />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedEndMinute}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedEndMinute(itemValue)}
                itemStyle={{ color: '#000000' }}
              >
                {["00", "15", "30", "45"].map((m, index) => (
                  <Picker.Item label={m} value={m} key={index} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={confirmEndTimeSelection}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>수정 완료</Text>
      </TouchableOpacity>
    </View>
  );
}
