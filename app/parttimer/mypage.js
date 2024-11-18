import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal, FlatList } from 'react-native';
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
    '운송/배달', '생산/제조', '건설', '물류', '미디어',
  ];

  const radarData = [
    { label: '고객응대', value: 59 },
    { label: '책임감', value: 59 },
    { label: '적응력', value: 59 },
    { label: '창의성', value: 59 },
    { label: '팀워크', value: 59 },
    { label: '효율성', value: 59 },
  ];

  const router = useRouter()

  const handleLogoutPress = () => {
    router.push('login/login')
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
            <Image source={require('../../assets/cu.jpg')} style={styles.profileImage} />
            <Text style={styles.userName}>홍길동</Text>
          </View>
          <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.editButton}>
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
            <Ionicons name="information-circle" size={20} color="#007AFF" style={styles.infoIcon} />
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/medal.png')} style={styles.medalImage} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>매너점수</Text>
                <Text style={styles.value}>59P</Text>
              </View>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>급여총액</Text>
                <Text style={styles.value}>135만원</Text>
              </View>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>근무횟수</Text>
                <Text style={styles.value}>3회</Text>
              </View>
              <View style={styles.labelValueRow}>
                <Text style={styles.label}>결근횟수</Text>
                <Text style={styles.value}>0회</Text>
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
          {radarData.map((item, index) => (
            <View key={index} style={styles.radarInfoSection}>
              <Text style={styles.radarLabel}>{item.label}</Text>
              <Text style={styles.radarValue}>{item.value}P</Text>
            </View>
          ))}
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