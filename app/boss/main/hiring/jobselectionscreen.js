import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './jobselectionscreen.style';

export default function JobSelectionScreen() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);

  // 직무 목록 데이터 (이미지 경로 추가)
  const jobs = [
    { id: '1', title: '주방', image: require('../../../../assets/kitchen.png') },
    { id: '2', title: '서빙', image: require('../../../../assets/Serving.png') },
    { id: '3', title: '매장관리', image: require('../../../../assets/Store Management.png') },
    { id: '4', title: '사무보조', image: require('../../../../assets/Office Assistant.png') },
    { id: '5', title: '단순노무', image: require('../../../../assets/Simple Labor.png') },
    { id: '6', title: '방송/행사',image: require('../../../../assets/Broadcasting.png') },
    { id: '7', title: '운송/배달', image: require('../../../../assets/Transportation.png') },
    { id: '8', title: '생산/설계', image: require('../../../../assets/Production.png') },
    { id: '9', title: '건설', image: require('../../../../assets/Construction.png') },
    { id: '10', title: '물류', image: require('../../../../assets/Logistics.png') },
  ];

  // 직무 선택 핸들러
  const selectJob = (jobId) => {
    setSelectedJob(jobId);
  };

  // 다음 화면으로 이동
  const goToNextScreen = () => {
    if (selectedJob) {
      router.push('boss/main/hiring/jobdetailsscreen');
    } else {
      alert('직무를 선택해주세요.');
    }
  };

  return (
    <View style={styles.container}>
      {/* 상단 X 버튼 */}
      <TouchableOpacity onPress={() => router.push('boss/main/boss_mainscreen')}>
        <Text>X</Text>
      </TouchableOpacity>

      {/* 상단 설명 텍스트 */}
      <Text style={styles.headerText}>직무를 선택해주세요</Text>
      <Text style={styles.subText}>해당 직무 카테고리를 선택하세요.</Text>

      {/* 직무 카테고리 리스트 */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        numColumns={2} // 2열로 정렬
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.jobButton,
              selectedJob === item.id && styles.selectedJobButton, // 선택된 버튼 스타일
            ]}
            onPress={() => selectJob(item.id)}
          >
            <Image source={item.image} style={styles.jobImage} />
            <Text
              style={[
                styles.jobText,
                selectedJob === item.id && styles.selectedJobText,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* 다음 버튼 */}
      <TouchableOpacity style={styles.nextButton} onPress={goToNextScreen}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
