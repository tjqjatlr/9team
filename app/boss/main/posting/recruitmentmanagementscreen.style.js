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
      backgroundColor: '#FFF',
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
    },
    tab: {
      flex: 1,
      padding: 16,
      alignItems: 'center',
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#007BFF',
    },
    activeTabText: {
      color: '#007BFF',
      fontWeight: 'bold',
    },
    inactiveTabText: {
      color: '#666',
    },
    contentContainer: {
      flex: 1,
      padding: 16,
    },
    applicantCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#EEE',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    message: {
      fontSize: 14,
      color: '#666',
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    personality: {
      fontSize: 12,
      color: '#999',
    },
    status: {
      fontSize: 12,
      color: '#999',
    },
    actionButtons: {
      flexDirection: 'row',
    },
    acceptButton: {
      backgroundColor: '#4CAF50',
      padding: 8,
      borderRadius: 5,
      marginLeft: 5,
    },
    rejectButton: {
      backgroundColor: '#F44336',
      padding: 8,
      borderRadius: 5,
      marginLeft: 5,
    },
    acceptButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    rejectButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
    emptyStateContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    placeholderImage: {
      width: 128,
      height: 128,
      marginBottom: 10,
    },
    noApplicantsText: {
      fontSize: 16,
      color: '#999',
      textAlign: 'center',
    },
  });

  export default styles