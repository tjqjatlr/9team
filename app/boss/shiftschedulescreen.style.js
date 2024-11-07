import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    calculatorIcon: {
        width: 24,
        height: 24,
      },
    calculatorButton: { // 아이콘과 텍스트를 가운데 정렬하는 스타일
        alignItems: 'center',
      },
      calculatorText: { // 작은 텍스트 스타일
        fontSize: 8,
        color: '#888',
        marginTop: 4,
      },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  calendarContainer: {
    height: '50%', // 화면의 반만 차지
    paddingHorizontal: 10,
  },
  scheduleContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  selectedDateText: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  shiftCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  shiftImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  shiftInfo: {
    flex: 1,
  },
  shiftName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shiftJob: {
    color: '#666',
  },
  shiftWage: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  statusTag: {
    backgroundColor: '#ffcccc',
    padding: 5,
    borderRadius: 5,
  },
  statusText: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  noShiftsText: {
    textAlign: 'center',
    padding: 20,
    color: '#888',
  },
});

export default styles