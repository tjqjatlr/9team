import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    chartHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left', // 왼쪽 정렬
        color: '#333333',
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 20, // 양쪽 여백 추가
      },
      radarChartContainer: {
        alignItems: 'center',
        marginVertical: 15,
      },
      radarInfoContainer: {
        flexDirection: 'column',
        padding: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        marginTop: 15,
        marginHorizontal: 20,
      },
      radarInfoHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      radarInfoSubheader: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        color: '#666666',
        marginBottom: 15,
      },
      radarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap', // 줄 바꿈 허용
        justifyContent: 'space-between',
      },
      radarGridItem: {
        width: '30%', // 3개씩 배치
        alignItems: 'center',
        marginBottom: 12,
      },
      radarLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4A4A4A',
        textAlign: 'center',
      },
      radarValue: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF4A4A',
        textAlign: 'center',
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
    marginLeft: 20, // 중앙 정렬을 위한 간격 조정
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  reportButton: {
    padding: 5,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  companyInfo: {
    flexDirection: 'column',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verification: {
    fontSize: 12,
    color: '#6e6e6e',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  bookmarkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFECEC',
    width: '30%',
    justifyContent: 'center',
  },
  bookmarkButtonSelected: {
    backgroundColor: '#FF6B6B',
  },
  bookmarkText: {
    marginLeft: 8,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  bookmarkTextSelected: {
    color: '#FFFFFF',
  },
  tabButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#C0EAF1',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  tabButtonTextRight: {
    color: '#3A78F2',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  tabIcon: {
    marginRight: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  workDetailsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  workDetailsContent: {
    marginTop: 10,
  },
  workDetailItem: {
    marginBottom: 15,
  },
  workLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  workHistorySection: {
    paddingHorizontal: 20,
  },
  workHistoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  workHistoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  workHistoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  workHistoryInfo: {
    flexDirection: 'column',
  },
  workHistoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  workHistoryDate: {
    fontSize: 14,
    color: '#666',
  },
  combinedProgressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
  },
  workSegment: {
    height: '100%',
  },
  workDetailsLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  workLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  labelDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  workLabelText: {
    fontSize: 14,
    color: '#555',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  toggleButton: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  sectionTitle_e: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
