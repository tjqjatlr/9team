import React, { useState } from 'react';
import { View, Text, TouchableOpacity,  Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './recruitmentmanagementscreen.style';

export default function RecruitmentManagementScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('지원'); // 활성 탭 상태

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={{ zIndex: 999 }} onPress={() => router.push('boss/jobpostionsscreen')}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>근무정보 추가</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === '지원' && styles.activeTab]}
          onPress={() => setActiveTab('지원')}
        >
          <Text style={activeTab === '지원' ? styles.activeTabText : styles.inactiveTabText}>지원 0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === '채용' && styles.activeTab]}
          onPress={() => setActiveTab('채용')}
        >
          <Text style={activeTab === '채용' ? styles.activeTabText : styles.inactiveTabText}>채용 0</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {activeTab === '지원' ? (
          // 지원 탭 내용
          <>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3160/3160580.png' }}
              style={styles.placeholderImage}
            />
            <Text style={styles.noApplicantsText}>아직 지원자가 없어요...</Text>
            <TouchableOpacity style={styles.suggestButton}>
              <Text style={styles.suggestButtonText}>지원 제안하러 가기</Text>
            </TouchableOpacity>
          </>
        ) : (
          // 채용 탭 내용
          <>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3160/3160580.png' }}
              style={styles.placeholderImage}
            />
            <Text style={styles.noApplicantsText}>아직 채용하신 알바생이 없어요...</Text>
          </>
        )}
      </View>
    </View>
  );
}
