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
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    section: {
      marginTop: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    counterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    counterButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ddd',
      borderRadius: 20,
    },
    counterText: {
      fontSize: 20,
      color: '#333',
    },
    countText: {
      fontSize: 18,
      color: '#333',
      marginHorizontal: 20,
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