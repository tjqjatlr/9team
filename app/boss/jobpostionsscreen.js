import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox, Menu } from 'react-native-paper';
import styles from './jobpostionsscreen.style';

export default function JobPostingsScreen() {
  const router = useRouter();
  const [showClosedJobs, setShowClosedJobs] = useState(false);
  const [checked, setChecked] = useState(false);
  const [storeMenuVisible, setStoreMenuVisible] = useState(false);
  const [sortMenuVisible, setSortMenuVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('진행중'); // 활성화된 탭 상태 추가

  const jobPosts = [
    { id: '1', title: '[티엔미미] 주방', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: false },
    { id: '2', title: '[티엔미미] 서빙', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: true },
    { id: '3', title: '[티엔미미] 주방', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: false },
    { id: '4', title: '[티엔미미] 서빙', date: '10월 12일(토) 23:00 ~ 01:00', wage: '시급 10,000원', applicants: 0, hires: 0, closed: true },
  ];

  const filteredJobPosts = jobPosts.filter(post => post.closed === showClosedJobs);

  const goToRegisterJobScreen = () => {
    router.push('boss/jobselectionscreen');
  };

  const renderJobPost = ({ item }) => (
    <View style={styles.jobCard}>
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
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
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
    </View>
  );
}
