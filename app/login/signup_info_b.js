import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import styles from './signup_info.style';

const jobOptions = [
  '주방', '서빙', '매장관리', '사무보조', '단순노무', '방송/행사스텝',
  '운송/배달', '생산/제조', '건설', '물류'
];

const SignupInfo = () => {
  const [gender, setGender] = useState('');
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isJobModalVisible, setIsJobModalVisible] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const navigation = useNavigation(); // Initialize the navigation object

  const toggleAddressModal = () => {
    setIsAddressModalVisible(!isAddressModalVisible);
  };

  const toggleJobModal = () => {
    setIsJobModalVisible(!isJobModalVisible);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleJobSelect = (job) => {
    if (selectedJobs.includes(job)) {
      setSelectedJobs(selectedJobs.filter(selectedJob => selectedJob !== job));
    } else if (selectedJobs.length < 3) {
      setSelectedJobs([...selectedJobs, job]);
    }
  };

  const handleJobConfirm = () => {
    setIsJobModalVisible(false);
  };

  const handleSignupComplete = () => {
    Alert.alert(
      "회원가입 완료!",
      "확인을 누르면 성향 검사로 이동합니다.",
      [
        {
          text: "확인",
          onPress: () => navigation.navigate('propensity') // Navigate after confirmation
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>휴대폰*</Text>
        <View style={styles.row}>
          <TextInput style={styles.input} placeholder="휴대폰 번호 -없이 입력" />
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.buttonText}>인증</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TextInput style={styles.input} placeholder="인증번호 입력" />
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>이름*</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>이메일*</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>비밀번호*</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="비밀번호 8~15자 / 영문 + 숫자 + 특수문자" />

        <Text style={styles.label}>비밀번호 확인*</Text>
        <TextInput style={styles.input} secureTextEntry />

        <Text style={styles.label}>성별*</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.radioCircle, gender === '남자' && styles.selectedRadio]}
            onPress={() => handleGenderSelect('남자')}
          >
            {gender === '남자' && <View style={styles.radioDot} />}
          </TouchableOpacity>
          <Text style={styles.radioText}>남자</Text>
          <TouchableOpacity
            style={[styles.radioCircle, gender === '여자' && styles.selectedRadio]}
            onPress={() => handleGenderSelect('여자')}
          >
            {gender === '여자' && <View style={styles.radioDot} />}
          </TouchableOpacity>
          <Text style={styles.radioText}>여자</Text>
        </View>

        <Text style={styles.label}>생년월일*</Text>
        <View style={styles.row}>
          <TextInput style={styles.dateInput} placeholder="YY / MM / DD" />
        </View>

        <View style={styles.rowLabel}>
          <Text style={styles.label}>주소*</Text>
          <TouchableOpacity style={styles.verifyButton} onPress={toggleAddressModal}>
            <Text style={styles.buttonText}>찾아보기</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="도로명주소" />

        <View style={styles.rowLabel}>
          <Text style={styles.label}>운영업종*</Text>
          <TouchableOpacity style={styles.verifyButton} onPress={toggleJobModal}>
            <Text style={styles.buttonText}>찾아보기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.selectedJobsContainer}>
          {selectedJobs.map((job, index) => (
            <View key={index} style={styles.selectedJobCard}>
              <Text style={styles.selectedJobText}>{job}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSignupComplete}>
          <Text style={styles.submitButtonText}>회원가입 완료</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Address Modal */}
      <Modal
        visible={isAddressModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>운영하는 근무지 위치를 설정해주세요</Text>
            <TextInput style={styles.input} placeholder="도로명, 지번, 건물명" />
            <TouchableOpacity style={styles.confirmButton} onPress={toggleAddressModal}>
              <Text style={styles.confirmButtonText}>위치 설정 완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Job Modal */}
      <Modal
        visible={isJobModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>운영하는 업종을 선택해주세요</Text>
              <TouchableOpacity onPress={toggleJobModal}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={jobOptions}
              numColumns={2}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.jobOption,
                    selectedJobs.includes(item) && styles.selectedJobOption
                  ]}
                  onPress={() => handleJobSelect(item)}
                >
                  <Text style={styles.jobOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.confirmButton} onPress={handleJobConfirm}>
              <Text style={styles.confirmButtonText}>선택 완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignupInfo;
