import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet,Image } from 'react-native';
import styles from './Loginpage.styles';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BaroJob</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Text style={styles.optionText}>아이디찾기</Text>
        </TouchableOpacity>
        <Text style={styles.optionSeparator}>|</Text>
        <TouchableOpacity>
          <Text style={styles.optionText}>비밀번호찾기</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.socialLoginText}>개인정보 SNS 로그인</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('../../asset/kakao.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../asset/naver.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../asset/gogle.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>계정이 없으신가요?</Text>
        <TouchableOpacity>
          <Text style={styles.registerLink}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LoginPage;