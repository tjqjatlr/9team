import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './change_addressscreen.style';

const ChangeAddress = () => {
    const [currentAddress, setCurrentAddress] = useState('충남 아산시 XXXX'); // 기존 주소
    const [newAddress, setNewAddress] = useState(''); // 변경할 주소
    const router = useRouter();

    const handleSave = () => {
        if (!newAddress.trim()) {
            Alert.alert('오류', '새 주소를 입력해주세요.');
        } else {
            Alert.alert('완료', '주소가 성공적으로 변경되었습니다.');
            router.back(); // 이전 화면으로 돌아가기
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>주소 변경</Text>

            {/* 현재 주소 표시 */}
            <Text style={styles.label}>현재 주소</Text>
            <Text style={styles.currentAddress}>{currentAddress}</Text>
            <View style={styles.divider} />

            {/* 변경할 주소 입력 */}
            <Text style={styles.label}>변경할 주소</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="변경할 새 주소를 입력하세요"
                    value={newAddress}
                    onChangeText={setNewAddress}
                />
            </View>

            {/* 저장 버튼 */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>변경하기</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangeAddress;
