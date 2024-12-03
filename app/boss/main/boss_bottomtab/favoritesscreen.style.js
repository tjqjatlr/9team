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
    paddingHorizontal: 16, // 추가: 양쪽 간격 조정
  },
  emptyIcon: {
    width: 120, // 크기 조정
    height: 120,
    marginBottom: 20,
    tintColor: '#D3D3D3', // 추가: 아이콘 색상 변경
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
    marginBottom: 12, // 여백 증가
    textAlign: 'center', // 추가: 텍스트 중앙 정렬
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12, // 버튼 상하 패딩 증가
    paddingHorizontal: 24, // 버튼 좌우 패딩 증가
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

export default styles;
