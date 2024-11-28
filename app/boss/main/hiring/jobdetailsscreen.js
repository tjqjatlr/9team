import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './jobdetailsscreen.style'
import { useRouter } from 'expo-router';

export default function JobDetailsScreen() {
  const router = useRouter();
  const selectedJob = "매장관리"; // 예시로 매장관리를 선택했다고 가정
  
  const goToNextScreen = () => {
    
    if (selectedJob) {
      router.push('boss/main/hiring/jobcontentscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  }; 

  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push('boss/main/hiring/jobselectionscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
        <Text style={styles.headerTitle}>근무정보 추가</Text>
      </View>

      {/* 진행 상태 게이지 */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '33%' }]} />
      </View>

      {/* 내용 */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>어떤 업무가 필요하신가요?</Text>

        {/* 업무 키워드 */}
        <View style={styles.section}>
          <Text style={styles.label}>업무 키워드</Text>
          <View style={styles.row}>
            <Text style={styles.keywordText}>{selectedJob}</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>수정</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 해야 할 업무 */}
        <View style={styles.section}>
          <Text style={styles.label}>해야 할 업무</Text>
          <View style={styles.row}>
            <View>
              <Text style={styles.taskText}>- 카운터</Text>
              <Text style={styles.taskText}>- 편의점 경력</Text>
              <Text style={styles.taskText}>- 제품 진열/정리</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.editText}>수정</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 알바생이 준비해야할 것 */}
        <View style={styles.section}>
          <Text style={styles.label}>알바생이 준비해야할 것 (선택)</Text>
          <View style={styles.row}>
            <Text style={styles.placeholderText}>업무 및 필요한 사항을 선택해주세요</Text>
            <TouchableOpacity>
              <Text style={styles.addText}>추가</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 다음 버튼 */}
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
