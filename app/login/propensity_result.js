import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './propensity_result.style';

const PropensityResult = () => {
  const router = useRouter();
  const personalityType = 'ENTP';
  const description = '창의적이고 즉흥적으로 대처하는 성향이에요!';
  const recommendedJobs = ['이벤트 스텝', '행사 진행', '홍보', '모델'];

  const handleGoHome = () => {
    router.push('parttimer/home/home_a');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>당신의 성향은</Text>
      <Text style={styles.personalityType}>{personalityType}</Text>
      <Text style={styles.title}>입니다</Text>
      
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.subDescription}>아래의 직무를 추천드려요 :)</Text>
      
      <View style={styles.jobContainer}>
        {recommendedJobs.map((job, index) => (
          <View key={index} style={styles.jobTag}>
            <Text style={styles.jobText}>{job}</Text>
          </View>
        ))}
      </View>
      
      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Text style={styles.homeButtonText}>홈으로 이동</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PropensityResult;
