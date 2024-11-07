import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import styles from './propensity.style';

const Propensity = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton}>
        <Link href="parttimer/home_a" style={styles.skipButtonText}>건너뛰기</Link>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Text style={styles.title}>바로TI</Text>
        <Text style={styles.description}>
          바로 성향검사를 하면 알바매칭의 정확도가 올라가요!
        </Text>
        <Image
          source={require('../../assets/propensity.png')}
          style={styles.image}
        />
      </View>
      
      <Link href="/login/propensity_test" style={styles.startButton}>
        <Text style={styles.startButtonText}>검사하러 가기</Text>
      </Link>

    </View>
  );
};

export default Propensity;
