import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;



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
    myJobsContainer: {
      padding: 16,
      backgroundColor: '#E6EBFD',
    },
    myJobsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 16,
    },
    pageContainer: {
      width: screenWidth, // 전체 화면 너비로 설정하여 페이지처럼 보이게 합니다
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    jobCardWrapper: {
      width: screenWidth / 2 - 24, // 2개씩 배치되도록 너비 설정
      margin: 8,
    },
    jobCard: {
      flexDirection: 'column',
      height: 165,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 12,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    jobImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 8,
    },
    jobDetails: {
      alignItems: 'center',
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333333',
      textAlign: 'center',
    },
    jobSubtitle: {
      fontSize: 14,
      color: '#666666',
      textAlign: 'center',
    },
    jobInfo: {
      fontSize: 12,
      color: '#999999',
    },
    jobTagContainer: {
      alignItems: 'center',
      marginTop: 8,
    },
    jobTag: {
      fontSize: 12,
      color: '#6EA8DA',
    },
    jobType: {
      fontSize: 12,
      color: '#999999',
    },
    pageContainer: {
      width: screenWidth, // 화면 너비
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
  },
    jobCardWrapper: {
      width: screenWidth / 2 - 24, 
      marginVertical: 4,
      marginHorizontal: 4,
    },
    pageIndicator: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 16,
    },
    indicatorDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#E0E0E0',
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: '#6EA8DA',
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