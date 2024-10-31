import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './signup.style';

const SignupPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Image source={require('../../assets/user.png')} style={styles.icon} />
        <Text style={styles.optionTitle}>알바 회원</Text>
        <Text style={styles.optionSubtitle}>일자리를 찾는 알바생</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>알바로 시작하기</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Image source={require('../../assets/user.png')} style={styles.icon} />
        <Text style={styles.optionTitle}>사장 회원</Text>
        <Text style={styles.optionSubtitle}>알바생을 찾는 사장님</Text>
        <TouchableOpacity style={[styles.button, styles.ownerButton]}>
          <Text style={styles.buttonText}>사장님으로 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupPage;
