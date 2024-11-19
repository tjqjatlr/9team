import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import styles from './review.style';

const ReviewItem = ({ title, initialScore = 0, onScoreChange }) => {
  const [score, setScore] = useState(initialScore);

  const handlePress = (index) => {
    const newScore = index + 1;
    setScore(newScore);
    if (onScoreChange) {
      onScoreChange(newScore);
    }
  };

  return (
    <View style={styles.reviewItemContainer}>
      <Text style={styles.reviewTitle}>{title}</Text>
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(index)}>
            <FontAwesome
              name={index < score ? 'star' : 'star-o'}
              size={24}
              color={index < score ? '#FFD700' : '#d3d3d3'}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.scoreText}>{score}점</Text>
    </View>
  );
};

const ReviewScreen = ({ callbackFunction }) => {
  const reviews = [
    { title: '쾌적한 작업환경' },
    { title: '역할분담' },
    { title: '칭찬 및 인정' },
    { title: '유연한 근무시간' },
    { title: '상호존중' },
    { title: '학습 및 성장' },
    { title: '매너' },
  ];
  const [scores, setScores] = useState(Array(reviews.length).fill(0));
  const router = useRouter();
  const { headerImage, header } = useLocalSearchParams();

  const handleScoreChange = (index, score) => {
    const updatedScores = [...scores];
    updatedScores[index] = score;
    setScores(updatedScores);
  };

  const handleSubmit = () => {
    if (scores.some((score) => score === 0)) {
      Alert.alert('알림', '아직 평가하지 않은 항목이 있습니다.');
      return;
    }

    Alert.alert('감사합니다', '평가가 완료되었습니다. 참여해주셔서 감사합니다.', [
      {
        text: '확인',
        onPress: () => { router.push({ pathname: 'parttimer/home_a' })},
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={headerImage} style={styles.headerImage} />
        <Text style={styles.header}>{header}</Text>
      </View>
      <View style={styles.reviewContainer}>
        {reviews.map((review, index) => (
          <ReviewItem
            key={index}
            title={review.title}
            initialScore={scores[index]}
            onScoreChange={(score) => handleScoreChange(index, score)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.footer} onPress={handleSubmit}>
        <Text style={styles.footerText}>평가 완료</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReviewScreen;