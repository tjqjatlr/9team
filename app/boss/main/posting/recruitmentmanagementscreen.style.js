import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // 연한 파란색 배경
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
      marginLeft: -20, // 중앙 정렬을 위한 간격 조정
    },
    tabContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E0E0E0',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#007AFF',
    },
    activeTabText: {
      fontSize: 16,
      color: '#007AFF',
      fontWeight: 'bold',
    },
    inactiveTabText: {
      fontSize: 16,
      color: '#999',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    placeholderImage: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    noApplicantsText: {
      fontSize: 16,
      color: '#666',
      marginBottom: 10,
    },
    suggestButton: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      backgroundColor: '#007AFF',
      borderRadius: 5,
    },
    suggestButtonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  export default styles