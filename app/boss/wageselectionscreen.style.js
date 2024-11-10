import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    backText: {
      fontSize: 18,
      color: '#000',
    },
    headerTitle: {
      flex: 1,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    progressContainer: {
      height: 4,
      backgroundColor: '#ddd',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#007BFF',
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    wageTypeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    wageTypeButton: {
      flex: 1,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      alignItems: 'center',
      marginRight: 8,
      backgroundColor: '#f9f9f9',
    },
    selectedWageTypeButton: {
      backgroundColor: '#d0e7ff',
    },
    wageTypeButtonText: {
      fontSize: 16,
      color: '#333',
    },
    selectedWageTypeButtonText: {
      color: '#007bff',
    },
    wageInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    wageInput: {
      flex: 1,
      fontSize: 24,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      backgroundColor: '#f9f9f9',
      borderRadius: 4,
      textAlign: 'right',
      marginRight: 10,
    },
    wonText: {
      fontSize: 24,
      color: '#333',
    },
    minimumWageText: {
      fontSize: 14,
      color: '#333',
      marginBottom: 10,
    },
    minimumWageHighlight: {
      color: '#00aa00',
    },
    checkboxWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    checkboxContainer: {
      borderWidth: 1,  // 체크박스 감싸는 선 추가
      borderColor: '#ddd', // 선 색상 설정
      borderRadius: 4, // 선의 둥근 모서리
     
    },
    checkboxLabel: {
      marginLeft: 10,
      fontSize: 14,
      color: '#333',
    },
    checkboxNote: {
      fontSize: 12,
      color: '#666',
      marginLeft: 34, // indent to align under checkbox
    },
    nextButton: {
      padding: 15,
      backgroundColor: '#007BFF',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    nextButtonText: {
      fontSize: 18,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });

export default styles;
