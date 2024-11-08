import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align text and icon to the left
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  
  locationText: {
    fontSize: 20,
    color: '#000000',
    marginRight: 4,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align text and icon to the left
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8, // Add spacing between buttons
  },
  
  filterText: {
    fontSize: 14,
    color: '#666666',
    marginRight: 4,
  },
  listContainer: {
    padding: 16,
  },
  applicantCard: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileContainer: {
    position: 'relative',
    marginRight: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: -10,
    left: 12,
    backgroundColor: '#fff',
    borderRadius: 16, // Adjusted for smaller size
    padding: 3, // Reduced padding
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: '#666',
    marginTop: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  personality: {
    backgroundColor: '#e1f5fe',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 12,
    marginRight: 8,
  },
  status: {
    backgroundColor: '#c8e6c9',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 12,
  },
});

export default styles;
