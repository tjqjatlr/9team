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
    jobItem: {
      flexDirection: 'row',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    jobImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    jobDetails: {
      flex: 1,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    jobLocation: {
      fontSize: 14,
      color: '#777',
      marginBottom: 4,
    },
    jobTimeWage: {
      fontSize: 14,
      color: '#333',
      marginBottom: 4,
      marginTop: -25,
    },
    jobTag: {
      backgroundColor: '#1E90FF',
      color: '#FFFFFF',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
      alignSelf: 'flex-start',
    },
    bookmarkContainer: {
      width: 45,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#D3D3D3',
      backgroundColor: '#FFECEC',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
      left: -62.5, 
      top: 18, 
    },
    bookmarkContainerSelected: {
      backgroundColor: '#FF5722',
    },
    bookmarkText: {
      color: '#FF6B6B',
      marginLeft: 4,
      fontSize: 14,
    },
    bookmarkTextSelected: {
      color: '#FFFFFF',
    },
  });
  

export default styles