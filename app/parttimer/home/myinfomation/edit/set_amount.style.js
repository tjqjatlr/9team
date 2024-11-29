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
  readOnlyContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  readOnlyInput: {
    fontSize: 16,
    color: '#333333',
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
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
