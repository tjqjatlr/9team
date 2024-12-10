import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal, FlatList, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { RadarChart } from '@salmonco/react-native-radar-chart';
import styles from './mypage.style';

const MyPage = () => {
  const [selfIntroText, setSelfIntroText] = useState('잘 부탁드립니다!');
  const [isEditingSelfIntro, setIsEditingSelfIntro] = useState(false);
  const [tempSelfIntroText, setTempSelfIntroText] = useState(selfIntroText);
  const [isKeywordModalVisible, setIsKeywordModalVisible] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState(['서빙', '사무보조', '주방']);
  const [tempSelectedKeywords, setTempSelectedKeywords] = useState([]);

  const keywordOptions = [
    '주방', '서빙', '매장관리', '사무보조', '단순노무', '방송/행사스텝',
    '운송/배달', '생산/제조', '건설', '물류',
  ];

  const radarData = [
    { label: '고객응대', value: 59 },
    { label: '책임감', value: 59 },
    { label: '적응력', value: 59 },
    { label: '창의성', value: 59 },
    { label: '팀워크', value: 59 },
    { label: '효율성', value: 59 },
  ];

  const mannersScore = 59; // 매너점수
  const totalSalary = 135; // 급여총액 (만원 단위)
  const workCount = 10; // 근무횟수
  const absenceCount = 0; // 결근횟수

  // 점수 계산 함수
  const calculateCurrentScore = () => {
    const mannersPoints = Math.floor(mannersScore / 10) * 3;
    const salaryPoints = Math.floor(totalSalary / 10) * 1;
    const workPoints = workCount * 3;
    const absencePoints = absenceCount * -3;
    return mannersPoints + salaryPoints + workPoints + absencePoints;
  };

  // 등급 계산 함수
  const getGrade = (score) => {
    if (score < 50) return 'bronze';
    if (score <= 75) return 'silver';
    return 'gold';
  };

  // 현재 점수 및 등급 계산
  const currentScore = calculateCurrentScore();
  const grade = getGrade(currentScore);

  // 등급 이미지 맵핑
  const gradeImages = {
    bronze: require('../../../../assets/bronze.png'),
    silver: require('../../../../assets/silver.png'),
    gold: require('../../../../assets/gold.png'),
  };

  // info 아이콘 클릭 핸들러
  const handleInfoPress = () => {
    Alert.alert(
      '점수 정보',
      `현재 점수: ${currentScore}점\n등급: ${grade}\n\n점수 계산 방법:\n- 매너점수 10점당 3점\n- 급여총액 10만원당 1점\n- 근무횟수 1회당 3점\n- 결근횟수 1회당 -3점`,
      [{ text: '확인', onPress: () => {} }],
      { cancelable: true }
    );
  };

  const router = useRouter()

  const handleLogoutPress = () => {
    router.push('login/login')
  }
  const handleEditPress = () => {
    router.push('parttimer/home/myinfomation/mypage_edit')
  }

  const toggleEditSelfIntro = () => {
    setIsEditingSelfIntro(true);
    setTempSelfIntroText(selfIntroText);
  };

  const handleSelfIntroChange = (text) => {
    setTempSelfIntroText(text);
  };

  const saveSelfIntro = () => {
    setSelfIntroText(tempSelfIntroText);
    setIsEditingSelfIntro(false);
  };

  const cancelEditSelfIntro = () => {
    setIsEditingSelfIntro(false);
  };

  const toggleKeywordModal = () => {
    setIsKeywordModalVisible(!isKeywordModalVisible);
    if (!isKeywordModalVisible) {
      setTempSelectedKeywords(selectedKeywords);
    }
  };

  const handleKeywordSelect = (keyword) => {
    if (tempSelectedKeywords.includes(keyword)) {
      setTempSelectedKeywords(tempSelectedKeywords.filter((item) => item !== keyword));
    } else if (tempSelectedKeywords.length < 3) {
      setTempSelectedKeywords([...tempSelectedKeywords, keyword]);
    }
  };

  const handleKeywordConfirm = () => {
    setSelectedKeywords(tempSelectedKeywords);
    toggleKeywordModal();
  };

  const isKeywordSelected = (keyword) => tempSelectedKeywords.includes(keyword);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image source={require('../../../../assets/cu.jpg')} style={styles.profileImage} />
            <Text style={styles.userName}>홍길동</Text>
          </View>
          <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
              <Ionicons name="settings-outline" size={16} color="black" />
              <Text style={styles.editButtonText}>내 정보 수정</Text>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="file-text" size={24} color="black" />
                <Text style={styles.iconText}>계약서</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <MaterialIcons name="school" size={24} color="black" />
                <Text style={styles.iconText}>자격증</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <FontAwesome name="money" size={24} color="black" />
                <Text style={styles.iconText}>급여관리</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Row with Info and Preference Containers */}
        <View style={styles.rowContainer}>
          <View style={styles.infoContainer}>
          <TouchableOpacity onPress={handleInfoPress}>
              <Ionicons 
                name="information-circle" 
                size={20} 
                color="#007AFF" 
                style={styles.infoIcon} 
              />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              <Image source={gradeImages[grade]} style={styles.medalImage} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>매너점수</Text>
                <Text style={styles.value}>{mannersScore}P</Text>
              </View>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>급여총액</Text>
                <Text style={styles.value}>{totalSalary}만원</Text>
              </View>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>근무횟수</Text>
                <Text style={styles.value}>{workCount}회</Text>
              </View>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>결근횟수</Text>
                <Text style={styles.value}>{absenceCount}회</Text>
              </View>
            </View>
          </View>
          <View style={styles.preferenceContainer}>
            <Text style={styles.preferenceHeader}>희망 근무 시간대</Text>
            <View style={styles.preferenceContent}>
              <View style={styles.leftSection}>
                <Ionicons name="time-outline" size={24} color="#000" />
                <Text style={styles.preferenceLabel}>선호 시간</Text>
                <Text style={styles.preferenceValue}>오후</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={styles.rightSection}>
                <FontAwesome name="calendar" size={24} color="#000" />
                <Text style={styles.preferenceLabel}>선호 요일</Text>
                <Text style={styles.preferenceValue}>금, 토</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Radar Chart */}
        <View style={styles.radarChartContainer}>
          <RadarChart
            data={radarData}
            maxValue={100}
            gradientColor={{
              startColor: '#00BFFF',
              endColor: '#E6F7FF',
              count: 5,
            }}
            size={240}
            labelSize={12}
            strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
            strokeOpacity={[1, 1, 1, 1, 0.13]}
            labelColor="#004080"
            dataFillColor="#00BFFF"
            dataFillOpacity={0.8}
            dataStroke="#005B96"
            dataStrokeWidth={2}
            labelDistance={1.25}
          />
        </View>

        {/* Radar Chart Info Container */}
        <View style={styles.radarInfoContainer}>
          <View style={styles.radarGrid}>
            {radarData.map((item, index) => (
              <View key={index} style={styles.radarGridItem}>
                <Text style={styles.radarLabel}>{item.label}</Text>
                <Text style={styles.radarValue}>{item.value}P</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Additional Content */}
        <View style={styles.additionalContentContainer}>
          <View style={styles.keywordContainer}>
            <Text style={styles.sectionHeader}>관심 키워드</Text>
            <TouchableOpacity onPress={toggleKeywordModal}>
              <Ionicons name="pencil" size={16} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.keywordTagsContainer}>
            {selectedKeywords.map((keyword, index) => (
              <View key={index} style={styles.keywordTag}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>

          {/* 키워드 선택 모달 */}
          <Modal
            visible={isKeywordModalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>관심 키워드를 선택해주세요</Text>
                  <TouchableOpacity onPress={toggleKeywordModal}>
                    <Text style={styles.closeButton}>x</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={keywordOptions}
                  numColumns={2}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.keywordOption,
                        isKeywordSelected(item) && styles.selectedKeywordOption,
                      ]}
                      onPress={() => handleKeywordSelect(item)}
                    >
                      <Text
                        style={[
                          styles.keywordOptionText,
                          isKeywordSelected(item) && styles.selectedkeywordOptionText,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleKeywordConfirm}
                >
                  <Text style={styles.confirmButtonText}>완료</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.selfIntroContainer}>
            <Text style={styles.sectionHeader}>자기소개</Text>
            <TouchableOpacity onPress={toggleEditSelfIntro}>
              <Ionicons name="pencil" size={16} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          {isEditingSelfIntro ? (
            <View style={styles.selfIntroEditContainer}>
              <TextInput
                style={styles.selfIntroInput}
                value={tempSelfIntroText}
                onChangeText={handleSelfIntroChange}
                placeholder="자기소개를 입력하세요"
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.saveButton} onPress={saveSelfIntro}>
                  <Text style={styles.saveButtonText}>저장</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={cancelEditSelfIntro}>
                  <Text style={styles.cancelButtonText}>취소</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={styles.selfIntroText}>{selfIntroText}</Text>
          )}
          <View style={styles.experienceContainer}>
            <Text style={styles.sectionHeader}>경력 사항</Text>
            <Text style={styles.experienceCount}>3개</Text>
            <Ionicons name="chevron-forward" size={16} color="#000" />
          </View>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
            <Text style={styles.logoutButtonText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyPage;