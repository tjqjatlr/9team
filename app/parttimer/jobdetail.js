import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './jobdetail.style';

const JobDetail = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked((prev) => !prev);
    };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* 상단 제목 */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>[노티드 충남 아산점] 조리</Text>
          <TouchableOpacity style={styles.reportButton}>
          <MaterialCommunityIcons name="alarm-light" size={24} color="#FF6B6B" />
          </TouchableOpacity>
        </View>

        {/* 업체 정보 섹션 */}
        <View style={styles.infoSection}>
          <Image source={require('../../assets/knotted.jpg')} style={styles.profileImage} />
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>노티드</Text>
            <Text style={styles.verification}>사업자등록증 인증</Text>
          </View>
        </View>

        {/* 상세 정보 */}
        <View style={styles.details}>
          <Text style={styles.detailItem}>📅 2024.10.12 (토)</Text>
          <Text style={styles.detailItem}>🕒 19:00~23:00 / 휴게 1시간 (유급)</Text>
          <Text style={styles.detailItem}>💸 80,000원 / 시급 20,000원</Text>
          <Text style={styles.detailItem}>👥 모집인원 2명</Text>
        </View>

        {/* 구분선 */}
        <View style={styles.separator} />

        {/* 근무 정보 섹션 */}
        <View style={styles.section}>
          <Text style={styles.mainSectionTitle}>근무 정보</Text>
          <View style={styles.iconWithText}>
            <Image source={require('../../assets/location.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>근무지</Text>
          </View>
          <View style={styles.sectionContentContainer}>
            <View style={styles.verticalLine} />
            <Image source={require('../../assets/map.png')} style={styles.mapImage} />
            <Text style={styles.address}>충남 천안시 동남구 만남로 43 B관 4층</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.smallCopyButton}>
                <Text style={styles.copyButtonText}>주소 복사하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.smallDirectionButton}>
                <Text style={styles.directionButtonText}>길찾기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 업무 내용 */}
        <View style={styles.section}>
          <View style={styles.iconWithText}>
            <Image source={require('../../assets/work.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>업무 내용</Text>
          </View>
          <View style={styles.sectionContentContainer}>
            <View style={styles.verticalLine} />
            <Text style={styles.sectionContent}>주방 {'>'} 조리</Text>
          </View>
        </View>

        {/* 자격 요건 */}
        <View style={styles.section}>
          <View style={styles.iconWithText}>
            <Image source={require('../../assets/qualification.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>자격 요건</Text>
          </View>
          <View style={styles.sectionContentContainer}>
            <View style={styles.verticalLine} />
            <Text style={styles.sectionContent}>✔ 성실한 분</Text>
            <Text style={styles.sectionContent}>✔ 일 잘하시는 분</Text>
            <Text style={styles.sectionContent}>✔ 사고 안치시는 분</Text>
          </View>
        </View>

        {/* 추가 정보 */}
        <View style={styles.section}>
          <View style={styles.iconWithText}>
            <Image source={require('../../assets/info.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>추가 정보</Text>
          </View>
          <View style={styles.sectionContentContainer}>
            <View style={styles.verticalLine} />
            <Text style={styles.sectionContent}>지원해주셔서 감사합니다! 짧은 기간이지만 잘 해봅시다</Text>
          </View>
        </View>

        {/* 바로 리뷰 */}
        <View style={styles.section}>
          <View style={styles.iconWithText}>
            <Image source={require('../../assets/review.png')} style={styles.icon} />
            <Text style={styles.sectionTitle}>바로 리뷰</Text>
          </View>
          <View style={styles.sectionContentContainer}>
            <View style={styles.verticalLine} />
            <View style={styles.reviewList}>
              {[
                { text: '쾌적한 작업환경', score: 4, icon: require('../../assets/pleasant.png') },
                { text: '역할분담', score: 4, icon: require('../../assets/divide.png') },
                { text: '유연한 근무시간', score: 4, icon: require('../../assets/workinghours.png') },
              ].map((review, index) => (
                <View key={index} style={styles.reviewItem}>
                  <View style={styles.ratingBar}>
                    <View style={[styles.ratingFill, { width: `${review.score * 20}%`, backgroundColor: '#CCF7FF' }]}>
                      <Image source={review.icon} style={styles.reviewIconInsideGauge} />
                      <Text style={styles.reviewTextInsideGauge}>{review.text}</Text>
                    </View>
                    <Text style={styles.reviewRatingInsideGauge}>{review.score}점</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
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
          <FontAwesome
            name="heart"
            size={20}
            color={isBookmarked ? '#FFFFFF' : '#FF6B6B'}
          />
          <Text
            style={[
              styles.bookmarkText,
              isBookmarked && styles.bookmarkTextSelected,
            ]}
          >
            찜
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButtonRight}>
          <FontAwesome name="star" size={20} color="#3A78F2" style={styles.tabIcon} />
          <Text style={styles.tabButtonTextRight}>알바 지원</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetail;
