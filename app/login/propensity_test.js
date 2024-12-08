import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './propensity_test.style';
import ProgressBar from './ProgressBar';

const questions = [
  {
    question: "누구와 함께 일하는 상황을 더 선호하나요?",
    options: [
      "고객이나 동료들과 함께 소통하며 일하는 것이 좋아요!",
      "혼자서 집중할 수 있는 업무가 좋아요!"
    ]
  },
  {
    question: "어떤 방식으로 일을 진행하는 게 더 편한가요?",
    options: [
      "팀 회의나 그룹 작업에서 아이디어를 공유하는 게 좋아요!",
      "혼자서 조용히 일을 진행하는 게 더 편해요!"
    ]
  },
  {
    question: "업무를 처리할 때 어떤 정보를 더 중요하게 생각하나요?",
    options: [
      "구체적이고 실질적인 정보가 더 중요해요!",
      "전체적인 그림과 아이디어가 더 중요해요!"
    ]
  },
  {
    question: "문제를 해결할 때 어떤 방식을 선호하나요?",
    options: [
      "이미 있는 방법이나 경험을 따르는 게 좋아요!",
      "새로운 방법이나 창의적인 해결책을 찾는 게 좋아요!"
    ]
  }
];

const PropensityTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleResultPress = () => {
    router.push('/login/propensity_result'); 
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <Text style={styles.questionNumber}>Q{currentQuestionIndex + 1}.</Text>
      <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
      
      {questions[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            answers[currentQuestionIndex] === option && styles.selectedOption
          ]}
          onPress={() => handleOptionSelect(option)}
        >
          <Text
            style={[
              styles.optionText,
              answers[currentQuestionIndex] === option && styles.selectedOptionText
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      {currentQuestionIndex < questions.length - 1 ? (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          disabled={!answers[currentQuestionIndex]}
        >
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleResultPress}
          disabled={!answers[currentQuestionIndex]}
        >
          <Text style={styles.nextButtonText}>결과 보기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PropensityTest;
