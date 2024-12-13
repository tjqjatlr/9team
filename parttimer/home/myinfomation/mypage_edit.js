import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './mypage_edit.style';

const MyPageEdit = () => {
    const router = useRouter();
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    const handleContactPress = () => {
        router.push('parttimer/home/myinfomation/edit/change_contact'); 
    };
    const handlePasswordPress = () => {
        router.push('parttimer/home/myinfomation/edit/change_password'); 
    };
    const handleAddressPress = () => {
        router.push('parttimer/home/myinfomation/edit/change_address'); 
    };
    const handleBaroTIPress = () => {
        router.push('login/propensity'); 
    };
    const handleAmountPress = () => {
        router.push('parttimer/home/myinfomation/edit/set_amount'); 
    };
    const handleTimePress = () => {
        router.push('parttimer/home/myinfomation/edit/set_preferred_time'); 
    };

    const handleDeleteAccountPress = () => {
        Alert.alert(
            "알림",
            "정말 바로잡을 탈퇴하시겠습니까?",
            [
                { text: "아니오" },
                {
                    text: "예",
                    onPress: () => {
                        Alert.alert("알림", "탈퇴되었습니다.");
                        // 추가적인 탈퇴 로직 처리
                        router.push('/login'); 
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={styles.container}>
            {/* 기본 정보 섹션 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>기본 정보</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>이름</Text>
                    <Text style={styles.infoValue}>홍길동</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoValue}>hong@naver.com</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>연락처</Text>
                    <Text style={styles.infoValue}>010-XXXX-XXXX</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>주소</Text>
                    <Text style={styles.infoValue}>충남 아산시 XXXX</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>바로TI</Text>
                    <Text style={styles.infoValue}>ENTJ</Text>
                </View>
            </View>

            {/* 회원정보 수정 섹션 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>회원정보 수정</Text>
                <TouchableOpacity style={styles.editOption} onPress={handleContactPress}>
                    <Text style={styles.editText}>연락처 변경</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editOption} onPress={handlePasswordPress}>
                    <Text style={styles.editText}>비밀번호 변경</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editOption} onPress={handleAddressPress}>
                    <Text style={styles.editText}>주소 변경</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editOption} onPress={handleBaroTIPress}>
                    <Text style={styles.editText}>바로TI</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editOption} onPress={handleDeleteAccountPress}>
                    <Text style={styles.editText}>회원탈퇴</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
            </View>

            {/* 목표 설정 섹션 */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>목표 설정</Text>
                <TouchableOpacity style={styles.editOption} onPress={handleAmountPress}>
                    <Text style={styles.editText}>금액 설정</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editOption} onPress={handleTimePress}>
                    <Text style={styles.editText}>선호시간 설정</Text>
                    <Ionicons name="chevron-forward" size={16} color="#000" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MyPageEdit;
