import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './set_amount.style';


const SetAmount = () => {
  const [currentAmount, setCurrentAmount] = useState('1,000,000'); 
  const [newAmount, setNewAmount] = useState('');

  const router = useRouter()

  const formatAmount = (value) => {
    const numericValue = value.replace(/[^0-9]/g, ''); 
    return new Intl.NumberFormat('en-US').format(numericValue); 
  };

  const handleChangeAmount = (value) => {
    setNewAmount(formatAmount(value));
  };

  const handleSave = () => {
    if (newAmount.trim() === '') {
      Alert.alert('알림', '변경할 목표 금액을 입력해주세요.');
    } else {
      Alert.alert('완료', `목표 금액이 ${newAmount}원으로 변경되었습니다.`);
    }
    router.back()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>금액 설정</Text>

      {/* 현재 목표 금액 */}
      <Text style={styles.label}>현재 목표 금액</Text>
      <View style={styles.readOnlyContainer}>
        <Text style={styles.readOnlyInput}>{currentAmount} 원</Text>
      </View>

      {/* 변경할 목표 금액 */}
      <Text style={styles.label}>변경할 목표 금액</Text>
      <TextInput
        style={styles.input}
        placeholder="변경할 목표 금액을 입력하세요"
        keyboardType="numeric"
        value={newAmount}
        onChangeText={handleChangeAmount}
      />

      {/* 변경하기 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>변경하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetAmount;
