import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9BB1C7',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  attendanceContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  userText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    textAlign: 'left', 
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  progressColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  monthText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  progressBar: {
    marginBottom: 8,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  circleItem: {
    alignItems: 'center',
  },
  circularLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#666666',
  },
  myJobsContainer: {
    padding: 16,
    backgroundColor: '#E6EBFD',
  },
  myJobsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },
  pageContainer: {
    width: screenWidth, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
},
  jobCardWrapper: {
    width: screenWidth / 2 - 24, 
    marginVertical: 4,
    marginHorizontal: 4,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#6EA8DA',
  },
  adContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  adSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  adCard: {
    width: 120,
    marginRight: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  adImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  adCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
  },
  adDaysContainer: {
    marginTop: 4,
  },
  adDaysText: {
    fontSize: 12,
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default styles;