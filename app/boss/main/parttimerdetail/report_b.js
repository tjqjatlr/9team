// report.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { CheckBox } from '@rneui/themed';
import styles from './report_b.style';
import { router } from 'expo-router';

const ReportScreen = ({ navigation }) => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [otherReason, setOtherReason] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const reasons = [
    '근무 태도가 불성실해요',
    '업무 중 지각이 잦아요',
    '욕설 및 인신공격을 했어요',
    '사전 합의된 시간에 출근하지 않아요',
    '업무 중 무단으로 자리를 비워요',
    '업무 이외의 개인적인 행동이 잦아요',
    '업무 관련 기밀을 유출했어요',
    '업무 중 과도한 휴식 시간을 요구해요',
  ];

  const toggleReason = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter((item) => item !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleSubmit = () => {
    if (selectedReasons.length === 0) {
      Alert.alert('신고 사유를 선택해 주세요.');
      return;
    }

    if (selectedReasons.includes('기타') && otherReason.trim() === '') {
      Alert.alert('신고 사유를 입력해 주세요.');
      return;
    }

    setAlertMessage('');
    Alert.alert(
      '신고 완료',
      '신고해주셔서 감사합니다. 검토 후 즉시 조치할 수 있도록 하겠습니다.',
      [
        {
          text: '확인',
          onPress: () => router.push('boss/main/boss_bottomtab/findparttimerscreen'),
        },
      ]
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
        {alertMessage ? <Text style={styles.alertText}>{alertMessage}</Text> : null}
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
