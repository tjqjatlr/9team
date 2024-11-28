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
      width: 240,                   // 더 넓고 존재감 있는 박스
      height: 280,                  // 세로 길이 증가
      backgroundColor: '#eaf6ff',   // 부드럽고 밝은 파란색 톤
      borderRadius: 20,             // 더 부드러운 둥근 모서리
      padding: 20,                  // 안쪽 여백 증가
      marginRight: 16,
      alignItems: 'center',
      justifyContent: 'space-between', // 내부 요소 간격 균형
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      elevation: 5,                 // 입체감 추가
      borderWidth: 1,               // 테두리 추가
      borderColor: '#b3d7ff',       // 부드러운 파란색 테두리
    },
    recruitmentText: {
      fontSize: 20,                 // 가독성 높인 크기
      fontWeight: '700',            // 더 강조된 두께
      textAlign: 'center',
      color: '#004c9e',             // 짙은 파란색으로 깔끔한 포인트
      marginVertical: 20,           // 텍스트 상하 간격 확장
      lineHeight: 28,               // 줄 간격 증가로 깔끔한 배치
    },
    recruitButton: {
      width: '80%',                 // 버튼을 박스 크기에 맞춰 확대
      backgroundColor: '#004c9e',   // 진한 파란색으로 강렬한 포인트
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 25,             // 완전한 둥근 버튼
      borderWidth: 0,               // 테두리 제거
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    recruitButtonText: {
      color: '#ffffff',             // 흰색 텍스트
      fontSize: 16,                 // 명확한 버튼 글씨 크기
      fontWeight: '700',            // 강렬한 두께
      textTransform: 'uppercase',   // 대문자로 통일
      letterSpacing: 1.2,           // 텍스트 간격 추가
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
    jobCardWrapper: {
      width: screenWidth / 2 - 24, 
      marginVertical: 4,
      marginHorizontal: 4,
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
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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