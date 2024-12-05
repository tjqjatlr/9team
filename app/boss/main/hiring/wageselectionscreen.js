import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox } from 'react-native-paper'; // react-native-paper에서 Checkbox 임포트
import styles from './wageselectionscreen.style';

export default function WageSelectionScreen() {
  const [isHourly, setIsHourly] = useState(true); // true for 시급, false for 일급
  const [wage, setWage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleWageTypeToggle = (type) => {
    setIsHourly(type === '시급');
  };

  const goToNextScreen = () => {
    if (1) {
      router.push('boss/main/hiring/paymentselectionscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  };

  return (
    <View style={styles.container}>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '100%' }]} />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.label}>급여</Text>
        <View style={styles.wageTypeContainer}>
          <TouchableOpacity
            style={[styles.wageTypeButton, isHourly && styles.selectedWageTypeButton]}
            onPress={() => handleWageTypeToggle('시급')}
          >
            <Text style={[styles.wageTypeButtonText, isHourly && styles.selectedWageTypeButtonText]}>시급</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.wageTypeButton, !isHourly && styles.selectedWageTypeButton]}
            onPress={() => handleWageTypeToggle('일급')}
          >
            <Text style={[styles.wageTypeButtonText, !isHourly && styles.selectedWageTypeButtonText]}>일급</Text>
          </TouchableOpacity>
        </View>

        {/* Wage Input */}
        <View style={styles.wageInputContainer}>
          <TextInput
            style={styles.wageInput}
            keyboardType="numeric"
            placeholder="50,000"
            value={wage}
            onChangeText={(text) => setWage(text)}
          />
          <Text style={styles.wonText}>원</Text>
        </View>

        {/* Minimum Wage Information */}
        <Text style={styles.minimumWageText}>당일근무는 <Text style={styles.minimumWageHighlight}>시급 13,000원 이상 시</Text> 지원률이 높아요</Text>

        {/* Checkbox */}
        <View style={styles.checkboxWrapper}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={isChecked ? 'checked' : 'unchecked'} // 상태에 따라 체크 여부 설정
              onPress={() => setIsChecked(!isChecked)} // 클릭 시 상태 변경
              color="#007BFF" // 체크된 상태의 색상
            />
          </View>
          <Text style={styles.checkboxLabel}>
            인건비신고(세금공제)를 처리할게요
          </Text>
        </View>
        <Text style={styles.checkboxNote}>*간편결제 선택 시 자동 체크돼요</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}