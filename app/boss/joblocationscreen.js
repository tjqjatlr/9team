import React, { useState } from 'react';
import { View, Text, TouchableOpacity,  ScrollView, TextInput } from 'react-native';
import styles from './joblocationscreen.style';
import { useRouter } from 'expo-router';

export default function JobLocationScreen() {
  const router = useRouter();
  const [location, setLocation] = useState('충남 아산시 탕정면 갈산리 100');
  const [photos, setPhotos] = useState([]); // 사진 업로드 기능을 위해 상태 초기화
  const [facilities, setFacilities] = useState({
    식사지원: false,
    식대포함: false,
    교통비: false,
    주차가능: false,
    조기퇴근가능성: false,
    픽업제공: false,
  });

  const toggleFacility = (facility) => {
    setFacilities((prev) => ({ ...prev, [facility]: !prev[facility] }));
  };

 
  const goToNextScreen = () => {
    if (1) {
      router.push('boss/jobpostingscreen');
    } else {
      alert('필수 항목을 채워주세요');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push('boss/jobcontentscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
        <Text style={styles.headerTitle}>근무정보 추가</Text>
      </View>

      {/* 진행 상태 게이지 */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '100%' }]} />
      </View>

      {/* 내용 */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>근무지에 대해 알려주세요!</Text>

        {/* 근무지 */}
        <View style={styles.section}>
          <Text style={styles.label}>근무지</Text>
          <View style={styles.row}>
            <Text style={styles.locationText}>{location}</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>변경</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 근무지 사진 */}
        <View style={styles.section}>
          <Text style={styles.label}>일하는 환경 또는 근무지 사진 (선택)</Text>
          <TouchableOpacity style={styles.photoUpload}>
            <Text style={styles.photoText}>📷 0 / 3</Text>
          </TouchableOpacity>
          <Text style={styles.noteText}>* 사진을 올리면 지원율이 올라가요!</Text>
        </View>

        {/* 제공사항 */}
        <View style={styles.section}>
          <Text style={styles.label}>제공사항 (선택)</Text>
          <View style={styles.facilitiesContainer}>
            {Object.keys(facilities).map((facility) => (
              <TouchableOpacity
                key={facility}
                style={[styles.facilityButton, facilities[facility] && styles.selectedFacility]}
                onPress={() => toggleFacility(facility)}
              >
                <Text style={styles.facilityText}>{facility}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 저장 버튼 */}
      <TouchableOpacity style={styles.saveButton} onPress={goToNextScreen}>
        <Text style={styles.saveButtonText}>근무정보 저장</Text>
      </TouchableOpacity>
    </View>
  );
}
