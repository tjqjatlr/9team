import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from './mypage_editscreen.style';

const MyPageEditScreen = () => {
    const router = useRouter();
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    const handleContactPress = () => {
        router.push('boss/main/mypage/boss.modification/change_contactscreen'); 
    };
    const handlePasswordPress = () => {
        router.push('boss/main/mypage/boss.modification/change_passwordscreen'); 
    };
    const handleAddressPress = () => {
        router.push('boss/main/mypage/boss.modification/change_addressscreen'); 
    };
    const handleBaroTIPress = () => {
        router.push('login/propensity_b'); 
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
                    <Text style={styles.infoLabel}>사업장</Text>
                    <Text style={styles.infoValue}>정지선</Text>
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
        </ScrollView>
    );
};

export default MyPageEditScreen;
