import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8, 
  },
  recordDisplay: {
    padding: 16,
  },
  selectedDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },
  recordContainer: {
    paddingTop: 8,
  },
  workRecordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  recordDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  company: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  tag: {
    fontSize: 12,
    color: '#6B4EFF',
    backgroundColor: '#F0EFFF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  noRecord: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default styles;
