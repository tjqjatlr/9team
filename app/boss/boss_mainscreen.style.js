import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    scrollContainer: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    logo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3498db',
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#ffffff',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    recruitmentBanner: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: '#ffffff',
      
    },
    recruitmentItem: {
      width: 200,
      height: 200,
      backgroundColor: '#cceeff',
      borderRadius: 8,
      padding: 12,
      marginRight: 10,
      alignItems: 'center',
    },
    recruitmentText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    recruitButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: '#ffffff',   // 버튼 배경색 흰색
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 20,             // 둥글게 만들기
      borderWidth: 1,               // 버튼 테두리 추가
      borderColor: '#007bff',       // 테두리 색상
  },
  
  recruitButtonText: {
    color: '#000000',             // 글씨 색깔 검은색
    fontSize: 14,
    fontWeight: 'bold',
  },
    serviceText: {
      fontSize: 12,
      color: '#666',
      marginTop: 8,
    },
    storeSection: {
      padding: 16,
      backgroundColor: '#e8f4ff',  // 배경색을 연한 파란색으로 설정
  }, 
    storeName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    applicant: {
      width: 150,
      margin: 5,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 10,
      alignItems: 'center',
    },
    applicantImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginBottom: 8,
    },
    applicantInfo: {
      alignItems: 'center',
    },
    nameText: {
      fontWeight: 'bold',
    },
    jobText: {
      color: '#666',
      textAlign: 'center',
    },
    statusTag: {
      backgroundColor: '#ffcccc',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      marginTop: 4,
    },
    statusText: {
      color: '#ff0000',
      fontWeight: 'bold',
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 16,
      backgroundColor: '#ffffff',
    },
    button: {
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 12,
      marginTop: 4,
      color: '#000',
    },
    eventBanner: {
      padding: 16,
      backgroundColor: '#ffcccc',
      margin: 16,
      borderRadius: 8,
    },
    bannerText: {
      textAlign: 'center',
      color: '#ff0000',
      fontWeight: 'bold',
    },
  });
export default styles