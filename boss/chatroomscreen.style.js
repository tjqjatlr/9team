import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3498db',
    },
    scrollContainer: {
      flexGrow: 1,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 40,
    },
    emptyIcon: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    emptyText: {
      fontSize: 18,
      color: '#666',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#3498db',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });
  

export default styles