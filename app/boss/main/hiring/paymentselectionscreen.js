import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './paymentselectionscreen.style';

export default function PaymentSelectionScreen() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handlePaymentSelection = (type) => {
    setSelectedPayment(type);
  };

  const openModal = () => {
    if (selectedPayment) {
      setModalVisible(true);
    } else {
      alert('결제 방식을 선택해주세요');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const registerJobPost = () => {
    alert(`${selectedPayment} 방식으로 구인글이 등록되었습니다.`);
    setModalVisible(false);
    router.push('boss/main/posting/jobpostionsscreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ zIndex: 999 }} onPress={() => router.push('boss/main/hiring/wageselectionscreen')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
        <Text style={styles.headerTitle}>구인글 등록</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: '100%' }]} />
      </View>

      {/* Payment Selection */}
      <Text style={styles.label}>급여지급 방식을 선택해주세요</Text>
      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={[
            styles.paymentOptionButton,
            selectedPayment === '별도지급' && styles.selectedPaymentOptionButton,
          ]}
          onPress={() => handlePaymentSelection('별도지급')}
        >
          <Text style={styles.paymentOptionText}>별도지급</Text>
          <Text style={styles.paymentOptionAmount}>10,000원</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.paymentOptionButton,
            selectedPayment === '간편결제' && styles.selectedPaymentOptionButton,
          ]}
          onPress={() => handlePaymentSelection('간편결제')}
        >
          <Text style={styles.paymentOptionText}>간편결제</Text>
          <Text style={styles.paymentOptionAmount}>10,000원</Text>
        </TouchableOpacity>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>급여</Text>
          <Text style={styles.detailDescription}>사장님께서 직접 지급</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>일용직 신고, 계약관리</Text>
          <Text style={styles.detailDescription}>알바회원과 별도로 작성 필요</Text>
        </View>
      </View>

      {/* Estimated Cost */}
      <View style={styles.estimateContainer}>
        <Text style={styles.estimateTitle}>알바회원 채용 시 예상 금액</Text>
        <View style={styles.estimateRow}>
          <Text style={styles.estimateLabel}>서비스 이용료</Text>
          <Text style={styles.estimateAmount}>10,000원</Text>
        </View>
        <View style={styles.estimateRow}>
          <Text style={styles.estimateLabel}>급여</Text>
          <Text style={styles.estimateAmount}>10,000원</Text>
        </View>
        <Text style={styles.note}>* 급여는 사장님께서 직접 지급해주셔야 합니다</Text>
        <View style={styles.estimateTotalRow}>
          <Text style={styles.estimateTotalLabel}>총 예상 금액(VAT별도)</Text>
          <Text style={styles.estimateTotalAmount}>20,000원</Text>
        </View>
        <Text style={styles.note}>
          * 제휴/근무장소 등에 따라 실제 결제 금액과 다를 수 있습니다{'\n'}
          * 이용료는 1인 기준 금액이며 부가세는 별도입니다
        </Text>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={openModal}>
        <Text style={styles.registerButtonText}>
          {selectedPayment === '별도지급' ? '별도지급 방식으로 구인글 등록하기' : '간편결제 방식으로 구인글 등록하기'}
        </Text>
      </TouchableOpacity>

      {/* 확인 모달 */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>이 내용으로 구인글을 등록할까요?</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              입력해주신 구인글 정보를 마지막으로 점검하고 구인글을 등록해보세요.
            </Text>

            {/* 구인 정보 확인 섹션 */}
            <View style={styles.infoSection}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>날짜 및 모집인원</Text>
                <Text style={styles.infoValue}>10/12, 13, 14, 15 / 1명 모집</Text>
                <TouchableOpacity><Text style={styles.modifyText}>수정</Text></TouchableOpacity>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>근무시간</Text>
                <Text style={styles.infoValue}>23:00 ~ 익일 01:00</Text>
                <TouchableOpacity><Text style={styles.modifyText}>수정</Text></TouchableOpacity>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>급여</Text>
                <Text style={styles.infoValue}>시급 10,000원</Text>
                <TouchableOpacity><Text style={styles.modifyText}>수정</Text></TouchableOpacity>
              </View>
            </View>

            {/* 등록 버튼 */}
            <TouchableOpacity style={styles.confirmButton} onPress={registerJobPost}>
              <Text style={styles.confirmButtonText}>구인글 등록</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
