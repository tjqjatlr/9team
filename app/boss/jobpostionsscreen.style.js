import { StyleSheet } from "react-native-web";
 
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    storeDropdown: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    tabContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      backgroundColor: '#FFFFFF',
    },
    tab: {
      width: '50%',
      alignItems: 'center',
      paddingVertical: 10,
    },
    tabActive: { fontSize: 16, fontWeight: 'bold', color: '#007BFF' },
    tabInactive: { fontSize: 16, color: '#888' },  // 클릭되지 않은 탭의 색상 회색으로 수정
    
    // Tab underline (left and right)
    lineContainer: {
      flexDirection: 'row',
      width: '100%',
      height: 2,
    },
    lineLeft: {
      flex: 1,
      backgroundColor: '#888',
    },
    lineRight: {
      flex: 1,
      backgroundColor: '#888',
    },
    activeLineLeft: {
      backgroundColor: '#007BFF',
    },
    activeLineRight: {
      backgroundColor: '#007BFF',
    },
    inactiveLine: {
      backgroundColor: '#888',
    },
  
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#FFFFFF',
    },
    filterText: { 
      fontSize: 14, 
      color: '#333', 
      flex: 1, 
    },
    checkboxSortContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    separator: {
      height: 16,
      width: 1,
      backgroundColor: '#ddd',
      marginRight: 1,
    },
    dropdownButton: {
      paddingHorizontal: 10,
    },
    dropdownButtonText: {
      fontSize: 14,
      color: '#007BFF',
    },
  
    jobListTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginLeft: 20,
      marginVertical: 10,
    },
    listContainer: { 
      flex: 1, 
      backgroundColor: '#F2F8FF', 
      paddingHorizontal: 10, 
      paddingBottom: 80 
    },
    jobCard: {
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 10,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    badgeContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    badgeText: {
      backgroundColor: '#007BFF',
      color: '#fff',
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 3,
      fontSize: 12,
      marginRight: 5,
    },
    badgeType: {
      backgroundColor: '#ff6b6b',
      color: '#fff',
      borderRadius: 5,
      paddingHorizontal: 8,
      paddingVertical: 3,
      fontSize: 12,
    },
    jobTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    jobDate: { fontSize: 14, color: '#666' },
    jobWage: { fontSize: 14, color: '#007BFF' },
    statusContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    statusText: { fontSize: 12, color: '#888' },
    registerButton: {
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
      backgroundColor: '#007BFF',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 5,
    },
    registerButtonText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  });
  
  
  
  export default styles