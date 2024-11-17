import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './jobcontentscreen.style';
import { useRouter } from 'expo-router';

export default function JobContentScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // 다음 페이지로 이동
  const goToNextScreen = () => {
    if (1) {
      router.push('boss/joblocationscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  }; 

  return (
    <View style={styles.container}>
      {/* 헤더 라우터 경로 나중에 수정할 것*/}
      <View style={styles.header}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push('boss/jobdetailsscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
        <Text style={styles.headerTitle}>근무정보 추가</Text>
      </View>

      {/* 진행 상태 게이지 */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '66%' }]} />
      </View>

      {/* 내용 */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>어떤 내용으로 등록할까요?</Text>

        {/* 구인글 제목 */}
        <View style={styles.section}>
          <Text style={styles.label}>구인글 제목</Text>
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
              maxLength={40}
              placeholder="[온기] 매장관리"
            />
            <Text style={styles.charCount}>{title.length} / 40</Text>
          </View>
        </View>

        {/* 상세 내용 */}
        <View style={styles.section}>
          <Text style={styles.label}>상세 내용</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={description}
            onChangeText={(text) => setDescription(text)}
            maxLength={999}
            placeholder="지원자에게 필요한 정보를 입력하세요."
            multiline
            textAlignVertical="top"
          />
          <Text style={styles.charCount}>{description.length} / 999</Text>
        </View>

        {/* 안내 메시지 */}
        <Text style={styles.infoText}>
          ※ 개인 연락처 작성시 구인글이 삭제 될 수 있어요{'\n'}
          ※ 불특정 구직희망을 만든 후 구인글 등록 시 설정해주세요
        </Text>
      </ScrollView>

      {/* 다음 버튼 */}
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
