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
      marginLeft: -20,
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
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    locationText: {
      fontSize: 16,
      color: '#333',
    },
    editText: {
      fontSize: 16,
      color: '#007BFF',
    },
    photoUpload: {
      padding: 10,
      backgroundColor: '#ddd',
      alignItems: 'center',
      borderRadius: 5,
      marginVertical: 5,
    },
    photoText: {
      fontSize: 16,
      color: '#333',
    },
    noteText: {
      fontSize: 12,
      color: '#888',
      marginTop: 5,
    },
    facilitiesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    facilityButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      margin: 5,
    },
    selectedFacility: {
      backgroundColor: '#007BFF',
      borderColor: '#007BFF',
    },
    facilityText: {
      fontSize: 14,
      color: '#333',
    },
    saveButton: {
      padding: 15,
      backgroundColor: '#007BFF',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
    saveButtonText: {
      fontSize: 18,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });
  
  export default styles