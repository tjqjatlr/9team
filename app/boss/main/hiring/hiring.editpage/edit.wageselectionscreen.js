import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox } from 'react-native-paper';
import styles from './edit.wageselectionscreen.style';

export default function WageSelectionScreen() {
  const [isHourly, setIsHourly] = useState(true); 
  const [wage, setWage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleWageTypeToggle = (type) => {
    setIsHourly(type === '시급');
  };

  const goToNextScreen = () => {
    if (1) {
      router.push('boss/main/hiring/hiring.editpage/editjobscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header ㄵㅇㅅㅈ*/}
      <View style={styles.header}>
        <TouchableOpacity style={{ zIndex: 999 }} onPress={() => router.push('boss/main/hiring/hiring.editpage/editjobscreen')}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>구인글 수정</Text>
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
              status={isChecked ? 'checked' : 'unchecked'} 
              onPress={() => setIsChecked(!isChecked)} 
              color="#007BFF" 
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
        <Text style={styles.nextButtonText}>수정 완료</Text>
      </TouchableOpacity>
    </View>
  );
}