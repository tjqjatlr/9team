import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  reportButton: {
    padding: 5,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  companyInfo: {
    flexDirection: 'column',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verification: {
    fontSize: 12,
    color: '#6e6e6e',
  },
  verticalLine: {
    width: 2,
    backgroundColor: '#E0E0E0',
    position: 'absolute',
    top: 10,
    bottom: 15,
    left: 25, 
  }, 
  sectionContentContainer: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 10,
  }, 
  details: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  detailItem: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 6, 
    lineHeight: 24,
  },
  separator: {
    height: 3,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  mainSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapImage: {
    width: '80%',
    height: 200,
    borderRadius: 10,
    marginLeft: '4%',
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: '#333333',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  smallCopyButton: {
    width: 150,
    backgroundColor: '#EBEBEB',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  copyButtonText: {
    fontSize: 12,
    color: '#595959',
  },
  smallDirectionButton: {
    width: 100,
    backgroundColor: '#C0EAF1',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
  },
  directionButtonText: {
    fontSize: 12,
    color: '#366367',
  },
  section: {
    paddingVertical: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#333333',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  reviewList: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  reviewItem: {
    marginBottom: 10,
  },
  ratingBar: {
    height: 30,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 8,
  },
  ratingFill: {
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
  reviewIconInsideGauge: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  reviewTextInsideGauge: {
    fontSize: 14,
    color: '#424242',
    flex: 1,
  },
  reviewRatingInsideGauge: {
    fontSize: 12,
    color: '#333333',
    position: 'absolute',
    right: 8,
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  bookmarkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFECEC',
    width: '30%',
    justifyContent: 'center',
  },
  bookmarkButtonSelected: {
      backgroundColor: '#FF6B6B',
  },
  bookmarkText: {
      marginLeft: 8,
      color: '#FF6B6B',
      fontWeight: 'bold',
  },
  bookmarkTextSelected: {
      color: '#FFFFFF',
  },
  tabButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#C0EAF1',
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 10, 
  },
  tabButtonTextRight: {
    color: '#3A78F2',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  tabIcon: {
    marginRight: 5,
  },
});

export default styles;
