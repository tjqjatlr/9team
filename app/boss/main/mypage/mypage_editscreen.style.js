import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
  },
  infoLabel: {
    fontSize: 14,
    color: '#333333',
  },
  infoValue: {
    fontSize: 14,
    color: '#666666',
  },
  editOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
  },
  editText: {
    fontSize: 14,
    color: '#000000',
  },
  arrow: {
    fontSize: 14,
    color: '#CCCCCC',
  },
});

export default styles;
