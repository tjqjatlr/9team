import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native';
import styles from './jobselectionscreen.style';
import { useRouter } from 'expo-router';

export default function JobSelectionScreen() {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);

  // 직무 목록 데이터 (이미지 경로 추가)
  const jobs = [
    { id: '1', title: '주방', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '2', title: '서빙', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '3', title: '매장관리', image:  ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '4', title: '사무보조', image:('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '5', title: '단순노무', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '6', title: '방송/행사', image:('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '7', title: '운송/배달', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '8', title: '생산/설계', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '9', title: '건설', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
    { id: '10', title: '물류', image: ('https://cdn-icons-png.flaticon.com/128/4101/4101014.png') },
  ];

  // 직무 선택 핸들러
  const selectJob = (jobId) => {
    setSelectedJob(jobId);
  };

  // 다음 화면으로 이동
  const goToNextScreen = () => {
    if (selectedJob) {
      router.push('boss/jobdetailsscreen');
    } else {
      alert('직무를 선택해주세요.');
    }
  };

  return (
    <View style={styles.container}>
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
