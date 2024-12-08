import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  questionNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  questionText: {
    fontSize: 18,
    marginVertical: 16,
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e0f7fa',
  },
  selectedOption: {
    backgroundColor: '#3498db',
    borderColor: '#00796b',
  },
  optionText: {
    fontSize: 16,
    color: '#00796b',
  },
  selectedOptionText: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  disabledButton: {
    backgroundColor: '#b0bec5',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
