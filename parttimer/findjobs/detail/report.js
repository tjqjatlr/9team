import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { router } from 'expo-router';
import styles from './report.style';

const ReportScreen = () => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [otherReason, setOtherReason] = useState('');

  const reasons = [
    '사행성 / 다단계로 의심돼요',
    '음란성 / 선정성 업무예요',
    '욕설 및 인신공격을 했어요',
    '허위업체로 의심돼요',
    '개인 연락처를 작성했어요',
    '업무 상세 내용이 불명확해요',
    '사업자가 아닌 개인 목적의 글이에요',
    '등록된 근무날짜와 다르게 요구해요',
  ];

  // 신고 사유 선택/해제 함수
  const toggleReason = (reason) => {
    setSelectedReasons((prevReasons) =>
      prevReasons.includes(reason)
        ? prevReasons.filter((item) => item !== reason)
        : [...prevReasons, reason]
    );
  };

  // 신고 제출 처리 함수
  const handleSubmit = () => {
    if (selectedReasons.length === 0) {
      Alert.alert('신고 사유를 선택해 주세요.');
      return;
    }
    if (selectedReasons.includes('기타') && otherReason.trim() === '') {
      Alert.alert('신고 사유를 입력해 주세요.');
      return;
    }
    Alert.alert(
      '신고 완료',
      '신고해주셔서 감사합니다. 검토 후 즉시 조치할 수 있도록 하겠습니다.',
      [{ text: '확인', onPress: () => router.push('parttimer/findjobs/findparttimer') }]
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} style={styles.container}>
      <View>
        <Text style={styles.title}>신고하는 이유를 알려주세요</Text>
        <Text style={styles.description}>
          신고 내용은 익명으로 접수되며, 검토 후 즉시 조치할 수 있도록 하겠습니다.
          허위 신고 적발 시 7일간 계정 정지됩니다.
        </Text>
        {reasons.map((reason, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <CheckBox
              title={reason}
              checked={selectedReasons.includes(reason)}
              onPress={() => toggleReason(reason)}
            />
          </View>
        ))}
        <View style={styles.otherContainer}>
          <CheckBox
            title="기타"
            checked={selectedReasons.includes('기타')}
            onPress={() => toggleReason('기타')}
          />
          {selectedReasons.includes('기타') && (
            <TextInput
              style={styles.textInput}
              placeholder="신고하는 이유를 자세하게 입력해주세요."
              value={otherReason}
              onChangeText={setOtherReason}
              maxLength={100}
            />
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>신고하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReportScreen;
