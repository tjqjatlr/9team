import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView,FlatList  } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { RadarChart } from '@salmonco/react-native-radar-chart';
import * as Clipboard from 'expo-clipboard';
import styles from './parttimerdetailscreen.style';
import { ProgressBar } from 'react-native-paper';




const JobDetail = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isWorkHistoryVisible, setIsWorkHistoryVisible] = useState(true); // 펼쳐보기 상태
  const router = useRouter()

  const handleReportPress = () => {
    router.push('boss/report_b');
  };

    const toggleBookmark = () => {
        setIsBookmarked((prev) => !prev);
    };
    const toggleWorkHistory = () => {
        setIsWorkHistoryVisible((prev) => !prev); // 펼쳐보기 상태 변경
      };
    const radarData = [
        { label: '고객응대', value: 59 },
        { label: '책임감', value: 59 },
        { label: '적응력', value: 59 },
        { label: '창의성', value: 59 },
        { label: '팀워크', value: 59 },
        { label: '효율성', value: 59 },
      ];
 
      const workDetails = [
        { label: '서빙', percentage: 34 },
        { label: '사무보조', percentage: 33 },
        { label: '청소', percentage: 55 },
        { label: '방송/홍보', percentage: 100 },
        { label: '기타', percentage: 0 },
      ];
    
      const workHistory = [
        {
          name: '노티드',
          date: '2024.10.25',
          image: require('../../assets/knotted.jpg'),
        },
        {
          name: '고를린',
          date: '2024.11.12',
          image: require('../../assets/goclean.jpg'),
        },
        {
          name: 'CU',
          date: '2024.9.12',
          image: require('../../assets/cu.jpg'),
        },
      ];

      const getSegmentColor = (index) => {
        const colors = [
            '#4CAF50', // 초록
            '#FF9800', // 주황
            '#2196F3', // 파랑
            '#9C27B0', // 보라
            '#F44336', // 빨강
            '#FFC107', // 노랑
            '#009688', // 청록
            '#E91E63', // 분홍
            '#3F51B5', // 짙은 파랑
            '#8BC34A', // 밝은 초록
          ];
        return colors[index % colors.length];
      };
      

  return (
    <View style={styles.container}>
  <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
    {/* 상단 제목 */}
    <View style={styles.header}>
      <TouchableOpacity style={{ zIndex: 999 }} onPress={() => router.push('boss/findparttimerscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>정지선</Text>
      <TouchableOpacity style={styles.reportButton} onPress={handleReportPress}>
        <MaterialCommunityIcons name="alarm-light" size={24} color="#FF6B6B" />
      </TouchableOpacity>
    </View>

    {/* 업체 정보 섹션 */}
    <View style={styles.infoSection}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUhokW7-Dmb7_J3adfQutjyKZUe4P99J4PQ&s',
        }}
        style={styles.profileImage}
      />
      <View style={styles.companyInfo}>
        <Text style={styles.companyName}>정지선</Text>
        <Text style={styles.verification}>일 기똥차게 합니다 연락 주세요</Text>
      </View>
    </View>

    {/* "사장님들의 평가는?" */}
    <Text style={styles.chartHeaderText}>사장님들의 평가는?</Text>

    {/* Radar Chart */}
    <View style={styles.radarChartContainer}>
      <RadarChart
        data={radarData}
        maxValue={100}
        gradientColor={{
          startColor: '#FF6B6B',
          endColor: '#FFECEC',
          count: 5,
        }}
        size={220}
        labelSize={14}
        strokeWidth={[0.5, 0.5, 0.5, 0.5, 0.8]}
        strokeOpacity={[1, 1, 1, 1, 0.2]}
        labelColor="#4A4A4A"
        dataFillColor="#FF6B6B"
        dataFillOpacity={0.7}
        dataStroke="#FF4A4A"
        dataStrokeWidth={1.5}
        labelDistance={1.3}
      />
    </View>

    {/* Radar Chart Info Section */}
    <View style={styles.radarInfoContainer}>
      <Text style={styles.radarInfoHeader}>주로 월, 수, 금에 근무했어요!</Text>
      <Text style={styles.radarInfoSubheader}>12:00 ~ 15:00 시간대를 선호해요!</Text>
      <View style={styles.radarGrid}>
        {radarData.map((item, index) => (
          <View key={index} style={styles.radarGridItem}>
            <Text style={styles.radarLabel}>{item.label}</Text>
            <Text style={styles.radarValue}>{item.value}P</Text>
          </View>
        ))}
      </View>
    </View>

    <Text style={styles.sectionTitle}>주로 이런 업무를 했어요!</Text>
    
    {/* 업무별 상세 경험 */}
    <View style={styles.workDetailsSection}>

    <View style={styles.combinedProgressBar}>
        {workDetails.map((item, index) => (
        <View
            key={index}
            style={[
            styles.workSegment,
            { flex: item.percentage, backgroundColor: getSegmentColor(index) },
            ]}
        />
        ))}
    </View>
    <View style={styles.workDetailsLabels}>
        {workDetails.map((item, index) => (
        <View key={index} style={styles.workLabelContainer}>
            <View
            style={[
                styles.labelDot,
                { backgroundColor: getSegmentColor(index) },
            ]}
            />
            <Text style={styles.workLabelText}>
            {item.label} 
            </Text>
        </View>
        ))}
    </View>
    </View>

    <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle_e}>이런곳에서 일해봤어요!</Text>
          <TouchableOpacity onPress={() => setIsWorkHistoryVisible(!isWorkHistoryVisible)}>
            <Text style={styles.toggleButton}>
              {isWorkHistoryVisible ? '닫기' : '펼쳐보기'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 이전 근무 이력 */}
        {isWorkHistoryVisible && (
          <View>
            {workHistory.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', marginVertical: 10, padding: 10 }}>
                <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 25 }} />
                <View style={{ marginLeft: 10 }}>
                  <Text>{item.name}</Text>
                  <Text>{item.date}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

 


  {/* 하단 바텀탭 버튼 */}
  <View style={styles.bottomTab}>
    <TouchableOpacity
      style={[
        styles.bookmarkButton,
        isBookmarked && styles.bookmarkButtonSelected,
      ]}
      onPress={toggleBookmark}
    >
      <FontAwesome name="heart" size={20} color={isBookmarked ? '#FFFFFF' : '#FF6B6B'} />
      <Text style={[styles.bookmarkText, isBookmarked && styles.bookmarkTextSelected]}>찜</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabButtonRight}>
      <FontAwesome name="star" size={20} color="#3A78F2" style={styles.tabIcon} />
      <Text style={styles.tabButtonTextRight}>알바 제안</Text>
    </TouchableOpacity>
  </View>
</View>



  );
};

export default JobDetail;
