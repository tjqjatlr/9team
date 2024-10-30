import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
        {/* <TouchableOpacity>
          <Image source={require('./path/to/kakao-icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./path/to/naver-icon.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./path/to/google-icon.png')} style={styles.socialIcon} />
        </TouchableOpacity> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6ebed',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#76b0c5',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#76b0c5',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  optionText: {
    color: '#76b0c5',
  },
  optionSeparator: {
    marginHorizontal: 5,
    color: '#aaa',
  },
  socialLoginText: {
    color: '#aaa',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerContainer: {
    flexDirection: 'row',
  },
  registerText: {
    color: '#aaa',
  },
  registerLink: {
    color: '#76b0c5',
    marginLeft: 5,
  },
});

export default LoginPage;
