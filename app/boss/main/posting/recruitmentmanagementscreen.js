import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './recruitmentmanagementscreen.style';

export default function RecruitmentManagementScreen() {
  const router = useRouter();

  // 데이터 상태
  const [applicants, setApplicants] = useState([
    {
      id: '1',
      name: '안성재',
      age: 42,
      personality: '???',
      status: '접속중',
      message: '저는 부지런하답니다',
      image: require('../../../../assets/Profile2.jpg'),
    },
    {
      id: '2',
      name: '최강록',
      age: 45,
      personality: 'ISFJ',
      status: '3분전',
      message: '일할 준비 만빵! 연락주세요',
      image: require('../../../../assets/Profile4.jpg'),
    },
    {
      id: '3',
      name: '백종원',
      age: 58,
      personality: 'ENTJ',
      status: '1시간 전',
      message: '알바 경험 많습니다! 연락 주세요!',
      image: require('../../../../assets/Profile1.jpg'),
    },
  ]);

  const [hiredApplicants, setHiredApplicants] = useState([]); // 채용된 알바생
  const [activeTab, setActiveTab] = useState('지원'); // 활성 탭

  // 수락 처리
  const handleAccept = (applicant) => {
    setApplicants((prev) => prev.filter((item) => item.id !== applicant.id));
    setHiredApplicants((prev) => [...prev, applicant]);
  };

  // 거절 처리
  const handleReject = (id) => {
    setApplicants((prev) => prev.filter((item) => item.id !== id));
  };

  // 알바생 카드 렌더링
  const renderApplicantCard = ({ item, showButtons = false }) => (
    <View style={styles.applicantCard}>
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {item.name} ({item.age}세)
        </Text>
        <Text style={styles.message}>{item.message}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.personality}>{item.personality}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </View>
      {showButtons && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => handleAccept(item)}
          >
            <Text style={styles.acceptButtonText}>수락</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rejectButton}
            onPress={() => handleReject(item.id)}
          >
            <Text style={styles.rejectButtonText}>거절</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  // 빈 상태 메시지 렌더링
  const renderEmptyState = (message) => (
    <View style={styles.emptyStateContainer}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3160/3160580.png' }}
        style={styles.placeholderImage}
      />
      <Text style={styles.noApplicantsText}>{message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{ zIndex: 999 }}
          onPress={() => router.push('boss/main/posting/jobpostionsscreen')}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>채용관리</Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === '지원' && styles.activeTab]}
          onPress={() => setActiveTab('지원')}
        >
          <Text style={activeTab === '지원' ? styles.activeTabText : styles.inactiveTabText}>
            지원 {applicants.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === '채용' && styles.activeTab]}
          onPress={() => setActiveTab('채용')}
        >
          <Text style={activeTab === '채용' ? styles.activeTabText : styles.inactiveTabText}>
            채용 {hiredApplicants.length}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {activeTab === '지원' ? (
          applicants.length > 0 ? (
            <FlatList
              data={applicants}
              renderItem={({ item }) => renderApplicantCard({ item, showButtons: true })}
              keyExtractor={(item) => item.id}
            />
          ) : (
            renderEmptyState('아직 지원자가 없어요...')
          )
        ) : (
          hiredApplicants.length > 0 ? (
            <FlatList
              data={hiredApplicants}
              renderItem={({ item }) => renderApplicantCard({ item, showButtons: false })}
              keyExtractor={(item) => item.id}
            />
          ) : (
            renderEmptyState('아직 채용하신 알바생이 없어요...')
          )
        )}
      </View>
    </View>
  );
}