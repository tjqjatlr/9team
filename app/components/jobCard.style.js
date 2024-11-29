import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  jobCard: {
    flexDirection: 'row',
    height: 125,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  profileStatusContainer: {
    alignItems: 'center',
    marginRight: 10,
    marginTop: 8,
  },
  jobImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginBottom: 10,
  },
  jobStatus: {
    fontSize: 12,
    color: '#6EA8DA',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  detailsContainer: {
    width: 100,
    justifyContent: 'center',
    marginTop: 8,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 2,
  },
  jobInfo: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 2,
  },
  jobTag: {
    fontSize: 12,
    color: '#999999',
    backgroundColor: '#EBEBEB',
    textAlign: 'center',
    width: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 9,
  },
  reviewButton: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 68,
    marginLeft: -40,
  },
  reviewButtonText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default styles;
