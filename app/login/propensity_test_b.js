import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './propensity_test.style';
import ProgressBar from './ProgressBar';

const questions = [
  {
    question: "어떤 방식으로 직원과 소통하는 것이 더 편한가요?",
    options: [
      "직원들과 자주 소통하고 피드백을 주는 것이 좋아요!",
      "직원들이 자율적으로 일할 수 있도록 내버려 두는 게 좋아요."
    ]
  },
  {
    question: "업무를 처리할 때 어떤 정보가 더 중요하다고 생각하나요?",
    options: [
      "직원들의 업무 진행 상황이나 구체적인 데이터를 중요하게 생각해요!",
      "직원들의 장기적인 성장 가능성이나 비전이 더 중요해요!"
    ]
  },
  {
    question: "직원을 평가할 때 어떤 요소를 더 중요하게 생각하나요?",
    options: [
      "직원들의 성과나 업무 효율성을 중시해요!",
      "직원들의 감정 상태나 팀 내 분위기가 더 중요해요!"
    ]
  },
 
  {
    question: "업무를 진행할 때 어떤 스타일을 선호하나요?",
    options: [
      "미리 계획을 세워서 직원들이 일정대로 진행할 수 있도록 하는 것이 좋아요!",
      "상황에 맞춰 유연하게 일정을 조정하는 것이 더 좋아요!"
    ]
  },

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
