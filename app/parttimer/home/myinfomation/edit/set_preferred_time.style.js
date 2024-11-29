import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  dayButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#FFFFFF',
  },
  selectedDayButton: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  dayButtonText: {
    fontSize: 14,
    color: '#333333',
  },
  selectedDayButtonText: {
    color: '#FFFFFF',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  timeButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 5,
  },
  timeButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  timeSeparator: {
    fontSize: 30,
    color: '#595959',
    marginHorizontal: 20,
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#66ABBA',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;
