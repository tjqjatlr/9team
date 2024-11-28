import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './change_passwordscreen.style';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState(''); 
    const [newPassword, setNewPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const router = useRouter();

    const handleSave = () => {
        if (!currentPassword.trim()) {
            Alert.alert('알림', '현재 비밀번호를 입력해주세요.');
        } else if (!newPassword.trim()) {
            Alert.alert('알림', '새 비밀번호를 입력해주세요.');
        } else if (!confirmPassword.trim()) {
            Alert.alert('알림', '새 비밀번호 확인을 입력해주세요.');
        } else if (newPassword !== confirmPassword) {
            Alert.alert('알림', '새 비밀번호가 일치하지 않습니다.');
        } else {
            Alert.alert('완료', '비밀번호가 성공적으로 변경되었습니다.');
            router.back(); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>비밀번호 변경</Text>

            {/* 현재 비밀번호 입력 */}
            <Text style={styles.label}>현재 비밀번호</Text>
            <TextInput
                style={styles.input}
                placeholder="현재 비밀번호를 입력하세요"
                value={currentPassword}
                onChangeText={setCurrentPassword}
                secureTextEntry
            />

            <View style={styles.divider} />

            {/* 새 비밀번호 입력 */}
            <Text style={styles.label}>새 비밀번호</Text>
            <TextInput
                style={styles.input}
                placeholder="새 비밀번호를 입력하세요"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
            />

            {/* 새 비밀번호 확인 */}
            <Text style={styles.label}>새 비밀번호 확인</Text>
            <TextInput
                style={styles.input}
                placeholder="새 비밀번호를 다시 입력하세요"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            {/* 저장 버튼 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>변경하기</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangePassword;
