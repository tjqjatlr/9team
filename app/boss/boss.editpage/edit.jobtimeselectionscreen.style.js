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
      color: '#007BFF',
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
      padding: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    selectButton: {
      padding: 10,
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      alignItems: 'center',
    },
    selectButtonText: {
      fontSize: 16,
      color: '#333',
    },
    warningText: {
      fontSize: 12,
      color: 'red',
      marginTop: 10,
    },
    infoText: {
      fontSize: 12,
      color: '#888',
      marginTop: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      minHeight: 300,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5, // '시작 시간' 텍스트와 Picker 간의 여백 줄임
      textAlign: 'center',
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10, // Picker 상하 여백 최소화
      flex: 1,
    },
    picker: {
      flex: 1,
      height: 100,
      
    },
    confirmButton: {
      marginTop: 150, // Picker와 확인 버튼 사이 여백 최소화
      backgroundColor: '#007BFF',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      width: '80%',
    },
    confirmButtonText: {
      color: '#ffffff',
      fontSize: 18,
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


  export default styles