import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
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
    chatListContainer: {
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    chatImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    chatDetails: {
      flex: 1,
    },
    chatTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#333333',
    },
    chatLastMessage: {
      fontSize: 14,
      color: '#777777',
    },
    chatTimestamp: {
      fontSize: 12,
      color: '#A9A9A9',
      textAlign: 'right',
    },
  });
  

export default styles