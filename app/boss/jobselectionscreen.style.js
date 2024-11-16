import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
    },
    subText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#666',
      marginBottom: 20,
    },
    jobButton: {
      flex: 1,
      margin: 10,
      paddingVertical: 20,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      elevation: 3,
    },
    selectedJobButton: {
      backgroundColor: '#4CAF50',
    },
    jobImage: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
    jobText: {
      fontSize: 18,
      color: '#333',
    },
    selectedJobText: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    nextButton: {
      marginTop: 20,
      padding: 15,
      backgroundColor: '#007BFF',
      borderRadius: 10,
      alignItems: 'center',
    },
    nextButtonText: {
      fontSize: 18,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });
  

  
  export default styles