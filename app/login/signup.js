import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import styles from './signup.style';

const SignupPage = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Image source={require('../../assets/user.png')} style={styles.icon} />
        <Text style={styles.optionTitle}>알바 회원</Text>
        <Text style={styles.optionSubtitle}>일자리를 찾는 알바생</Text>
        <Link href="/login/signup_info" style={[styles.button, styles.linkText]}>
          <Text style={styles.buttonText}>알바로 시작하기</Text>
        </Link>
      </View>

      <View style={styles.optionContainer}>
        <Image source={require('../../assets/user.png')} style={styles.icon} />
        <Text style={styles.optionTitle}>사장 회원</Text>
        <Text style={styles.optionSubtitle}>알바생을 찾는 사장님</Text>
        <Link href="/login/signup_info_b" style={[styles.button, styles.ownerButton]}>
          <Text style={styles.buttonText}>사장님으로 시작하기</Text>
          </Link>
      </View>
    </View>
  );
};

export default SignupPage;
