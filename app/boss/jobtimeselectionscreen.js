import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './jobtimeselectionscreen.style';
import { useNavigation } from '@react-navigation/native';

export default function StartTimeSelectionScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("오전");
  const [selectedTime, setSelectedTime] = useState("시작시간 선택");

  const goToNextScreen = () => {
    if (1) {
      navigation.navigate('endtimeselectionscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  };


  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const confirmTimeSelection = () => {
    // 선택된 시간을 '오전 10:30' 형식으로 설정
    const timeString = `${selectedPeriod} ${selectedHour}:${selectedMinute}`;
    setSelectedTime(timeString);
    closeModal();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => navigation.goBack()}>
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
        <TouchableOpacity style={styles.selectButton} onPress={openModal}>
          <Text style={styles.selectButtonText}>{selectedTime}</Text>
        </TouchableOpacity>
        <Text style={styles.warningText}>* 근무 시간을 선택해주세요</Text>
        <Text style={styles.infoText}>근무시간의 시작시간은 최소 30분 이상, 끝시간과의 간격이 최소 1시간 이상을 유지하도록 설정해 주어야 합니다.</Text>
      </View>

      {/* Modal for Time Picker */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>시작 시간</Text>

            {/* Time Picker */}
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedPeriod}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
              >
                <Picker.Item label="오전" value="오전" />
                <Picker.Item label="오후" value="오후" />
              </Picker>
              <Picker
                selectedValue={selectedHour}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedHour(itemValue)}
              >
                {[...Array(12).keys()].map((i) => (
                  <Picker.Item label={`${i + 1}`} value={`${i + 1}`} key={i} />
                ))}
              </Picker>
              <Picker
                selectedValue={selectedMinute}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedMinute(itemValue)}
              >
                {["00", "15", "30", "45"].map((m, index) => (
                  <Picker.Item label={m} value={m} key={index} />
                ))}
              </Picker>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={confirmTimeSelection}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
