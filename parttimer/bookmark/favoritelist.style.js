import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  emptycontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    tintColor: '#B0C4DE',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#A9A9A9',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#66ABBA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
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
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
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
