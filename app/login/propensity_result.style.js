import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  personalityType: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4fc3f7',
    marginVertical: 8,
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
    marginBottom: 16,
  },
  jobContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
  },
  jobTag: {
    backgroundColor: '#ffeb3b',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  jobText: {
    fontSize: 14,
    color: '#333',
  },
  homeButton: {
    backgroundColor: '#4fc3f7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 32,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
