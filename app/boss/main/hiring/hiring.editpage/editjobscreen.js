import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './editjobscreen.style';
import { useRouter } from 'expo-router';

export default function JobEditScreen() {
  const jobDetails = [
    { id: '1', title: '업무 정보', content: '카운터 외 2건', route: 'boss/main/hiring/hiring.editpage/edit.jobdetailsscreen' },
    { id: '2', title: '상세 내용 정보', content: '청년 알바생 주말 근무', route: 'boss/main/hiring/hiring.editpage/edit.jobcontentscreen' },
    { id: '3', title: '근무지 정보', content: '충남 아산시 탕정면 삼성로 1', route: 'boss/main/hiring/hiring.editpage/edit.joblocationscreen' },
    { id: '4', title: '날짜 및 모집인원', content: '매니저 1명', route: 'boss/main/hiring/hiring.editpage/edit.jobpostingscreen' },
    { id: '5', title: '근무 시간', content: '오전 10시 - 오후 6시', route: 'boss/main/hiring/hiring.editpage/edit.jobtimeselectionscreen' },
    { id: '6', title: '급여', content: '시급 9,620원', route: 'boss/main/hiring/hiring.editpage/edit.wageselectionscreen' },
  ];
  const router = useRouter();

  return (
 
      

    <View style={styles.container}>
        <View style={styles.header}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push('boss/main/posting/jobpostionsscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
        <Text style={styles.headerTitle}>구인글 수정</Text>
      </View>
      <Text style={styles.instructionText}>수정할 정보를 선택해주세요</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {jobDetails.map((detail) => (
          <View key={detail.id} style={styles.detailContainer}>
            <View style={styles.detailRow}>
              <View>
                <Text style={styles.detailTitle}>{detail.title}</Text>
                <Text style={styles.detailContent}>{detail.content}</Text>
              </View>
              <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => router.push(`/${detail.route}`)} // 경로를 수정 페이지로 설정
              >
                <Text style={styles.editButtonText}>수정</Text>
                <Icon name="chevron-right" size={20} color="#888" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={() => router.push('boss/main/posting/jobpostionsscreen')}>
        <Text style={styles.saveButtonText}>수정 완료</Text>
      </TouchableOpacity>
    </View>
  );
}
