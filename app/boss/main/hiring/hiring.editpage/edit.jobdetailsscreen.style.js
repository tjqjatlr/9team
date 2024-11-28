import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    marginLeft: -20, 
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#ddd',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007BFF',
  },
  contentContainer: {
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  keywordText: {
    fontSize: 16,
    color: '#333',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#aaa',
  },
  editText: {
    fontSize: 16,
    color: '#007BFF',
  },
  addText: {
    fontSize: 16,
    color: '#007BFF',
  },
  nextButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles