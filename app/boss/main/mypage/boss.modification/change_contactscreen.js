import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './change_contactscreen.style';

const ChangeContact = () => {
    const [currentPhoneNumber, setCurrentPhoneNumber] = useState('010-1234-5678'); 
    const [newPhoneNumber, setNewPhoneNumber] = useState(''); 
    const [verificationCode, setVerificationCode] = useState(''); 
    const [isVerificationSent, setIsVerificationSent] = useState(false); 
    const router = useRouter();

    const handleVerify = () => {
        if (newPhoneNumber.trim() === '') {
            Alert.alert('알림', '새로운 연락처를 입력해주세요.');
        } else {
            setIsVerificationSent(true); 
            Alert.alert('인증', '인증번호가 전송되었습니다.');
        }
    };

    const handleSave = () => {
        if (newPhoneNumber.trim() === '') {
            Alert.alert('알림', '새로운 연락처를 입력해주세요.');
        } else if (isVerificationSent && verificationCode.trim() === '') {
            Alert.alert('알림', '인증번호를 입력해주세요.');
        } else {
            Alert.alert('완료', '연락처가 성공적으로 변경되었습니다.');
            router.back(); 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>연락처 변경</Text>

            {/* 기존 연락처 표시 */}
            <Text style={styles.label}>기존 연락처</Text>
            <Text style={styles.currentContact}>{currentPhoneNumber}</Text>

            <View style={styles.divider} />
            
            {/* 새로운 연락처 입력 */}
            <Text style={styles.label}>새로운 연락처</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="연락처를 입력하세요 (예: 010-XXXX-XXXX)"
                    value={newPhoneNumber}
                    onChangeText={setNewPhoneNumber}
                    keyboardType="phone-pad"
                />
                <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                    <Text style={styles.verifyButtonText}>인증</Text>
                </TouchableOpacity>
            </View>

            {/* 인증번호 입력 */}
            {isVerificationSent && (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="인증번호를 입력하세요"
                        value={verificationCode}
                        onChangeText={setVerificationCode}
                        keyboardType="number-pad"
                    />
                    <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                        <Text style={styles.verifyButtonText}>확인</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* 저장 버튼 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>변경하기</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangeContact;
