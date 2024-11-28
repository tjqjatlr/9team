import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox, Menu } from 'react-native-paper';
import styles from './jobpostionsscreen.style';

export default function JobPostingsScreen() {
  const router = useRouter();
  const [showClosedJobs, setShowClosedJobs] = useState(false);
  const [checked, setChecked] = useState(false);
  const [storeMenuVisible, setStoreMenuVisible] = useState(false);
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('진행중'); // 활성화된 탭 상태
  const [modalVisible, setModalVisible] = useState(false); // 모달 상태
  const [selectedJobId, setSelectedJobId] = useState(null); // 선택된 Job ID

  const openModal = (jobId) => {
    setSelectedJobId(jobId); // 선택된 Job ID 저장
    setModalVisible(true); // 모달 표시
  };

  const closeModal = () => {
    setSelectedJobId(null); // 선택된 Job ID 초기화
    setModalVisible(false); // 모달 닫기
  };

  const jobPosts = [
    { id: '1', title: '[티엔미미] 주방', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: false },
    { id: '2', title: '[티엔미미] 서빙', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: true },
    { id: '3', title: '[티엔미미] 주방', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: false },
    { id: '4', title: '[티엔미미] 서빙', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: true },
  ];

  const filteredJobPosts = jobPosts.filter(post => post.closed === showClosedJobs);

  const goToRegisterJobScreen = () => {
    router.push('boss/main/hiring/jobselectionscreen');
  };

  const handleDeleteJob = () => {
    if (!selectedJobId) {
      Alert.alert('오류', '선택된 Job ID가 없습니다.');
      return;
    }

    Alert.alert(
      '구인글 삭제 확인',
      '해당 구인글을 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '확인',
          onPress: () => {
            console.log(`Deleting job with ID: ${selectedJobId}`);
            // 삭제 처리 로직 추가(API 호출 등)
            closeModal(); // 모달 닫기
          },
        },
      ]
    );
  };

  const handleEditJob = () => {
    if (!selectedJobId) {
      Alert.alert('오류', '선택된 Job ID가 없습니다.');
      return;
    }

    router.push('boss/main/hiring/hiring.editpage/editjobscreen'); // 수정 페이지로 이동
    closeModal(); // 모달 닫기
  };

  const handleCloseJob = () => {
    if (!selectedJobId) {
      Alert.alert('오류', '선택된 Job ID가 없습니다.');
      return;
    }

    // 모집 마감 처리 로직 추가
    console.log(`Closing job with ID: ${selectedJobId}`);
    // 여기에서 API 호출 또는 상태 업데이트 로직을 추가할 수 있습니다.

    closeModal(); // 모달 닫기
  };

  const renderJobPost = ({ item }) => (
    <TouchableOpacity
    style={styles.jobCard}
    onPress={() => router.push('boss/main/posting/recruitmentmanagementscreen')}
  >
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>모집중</Text>
      <Text style={styles.badgeType}>1명</Text>
    </View>
    <Text style={styles.jobTitle}>{item.title}</Text>
    <Text style={styles.jobDate}>{item.date}</Text>
    <Text style={styles.jobWage}>{item.wage}</Text>
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>지원 {item.applicants}</Text>
      <Text style={styles.statusText}>채용 {item.hires}</Text>
    </View>

    <TouchableOpacity
      style={styles.moreIcon}
      onPress={() => openModal(item.id)} // Job ID 전달
    >
      <Text style={styles.moreText}>⋮</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_e}>
      <TouchableOpacity style ={{ zIndex: 999 }} onPress={() => router.push('boss/main/boss_mainscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle_e}>나의공고문</Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setStoreMenuVisible(true)} style={styles.storeDropdown}>
          <Text style={styles.headerTitle}>티엔미미 ▼</Text>
        </TouchableOpacity>
        <Menu
          visible={storeMenuVisible}
          onDismiss={() => setStoreMenuVisible(false)}
          anchor={<View />}
        >
          <Menu.Item onPress={() => {}} title="Option 1" />
          <Menu.Item onPress={() => {}} title="Option 2" />
        </Menu>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === '진행중' && styles.activeTab]}
          onPress={() => {
            setActiveTab('진행중');
            setShowClosedJobs(false);
          }}
        >
          <Text style={activeTab === '진행중' ? styles.tabActive : styles.tabInactive}>진행중</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === '종료' && styles.activeTab]}
          onPress={() => {
            setActiveTab('종료');
            setShowClosedJobs(true);
          }}
        >
          <Text style={activeTab === '종료' ? styles.tabActive : styles.tabInactive}>종료</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Underline */}
      <View style={styles.lineContainer}>
        <View style={[styles.lineLeft, activeTab === '진행중' ? styles.activeLineLeft : styles.inactiveLine]} />
        <View style={[styles.lineRight, activeTab === '종료' ? styles.activeLineRight : styles.inactiveLine]} />
      </View>

      {/* Filter Options */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>전체 {filteredJobPosts.length}개</Text>
        <View style={styles.checkboxSortContainer}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={styles.checkboxText}>모집마감 제외</Text>
          </View>

          <View style={styles.separator} />

          <TouchableOpacity onPress={() => setSortMenuVisible(true)} style={styles.dropdownButton}>
            <Text style={styles.dropdownButtonText}>마감일순 ▼</Text>
          </TouchableOpacity>
          
          <Menu
            visible={sortMenuVisible}
            onDismiss={() => setSortMenuVisible(false)}
            anchor={<View />}
          >
            <Menu.Item onPress={() => {}} title="Option A" />
            <Menu.Item onPress={() => {}} title="Option B" />
          </Menu>
        </View>
      </View>

      {/* Job List Title */}
      <Text style={styles.jobListTitle}>단기채용</Text>

      {/* Job Post List */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredJobPosts}
          renderItem={renderJobPost}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Register Job Button */}
      <TouchableOpacity style={styles.registerButton} onPress={goToRegisterJobScreen}>
        <Text style={styles.registerButtonText}>구인글 등록</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleDeleteJob}>
              <Text style={[styles.modalOption, { color: 'red' }]}>구인글 삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditJob}>
              <Text style={styles.modalOption}>구인글 수정</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCloseJob}>
              <Text style={styles.modalOption}>모집 마감</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.modalClose}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
