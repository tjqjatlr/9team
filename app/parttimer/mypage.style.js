import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    profileContainer: {
      alignItems: 'center',
      marginRight: 20,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#d3d3d3',
      marginBottom: 5,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    rightContainer: {
      flex: 1,
    },
    editButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      paddingHorizontal: 0,
      backgroundColor: 'transparent',
    },
    editButtonText: {
      fontSize: 14,
      color: '#000',
      marginLeft: 4,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#ffffff',
      padding: 5,
      borderRadius: 5,
    },
    iconButton: {
      alignItems: 'center',
      marginHorizontal: 5,
    },
    iconText: {
      marginTop: 5,
      fontSize: 14,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoContainer: {
      width: '52%',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    imageContainer: {
      position: 'relative',
      marginRight: 15,
      marginTop: 23,
    },
    medalImage: {
      width: 50,
      height: 50,
    },
    infoIcon: {
      position: 'absolute',
      top: 5,
      left: 5,
    },
    textContainer: {
      justifyContent: 'center',
    },
    labelValueRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    label: {
      fontSize: 16,
      color: '#555',
      marginRight: 8,
    },
    value: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007AFF',
    },
    preferenceContainer: {
      width: '46%',
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    preferenceHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    verticalDivider: {
      width: 1,
      backgroundColor: '#ccc',
      marginHorizontal: 20,
      alignSelf: 'stretch',
    },
    preferenceContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftSection: {
      flex: 1,
      alignItems: 'center',
    },
    rightSection: {
      flex: 1,
      alignItems: 'center',
    },
    preferenceLabel: {
      fontSize: 16,
      color: '#555',
      marginVertical: 5,
    },
    preferenceValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007AFF',
    },
    radarChartContainer: {
      alignItems: 'center',
      marginVertical: 20,
    },
    radarInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      marginBottom: 20,
    },
    radarInfoSection: {
      alignItems: 'center',
      flex: 1,
    },
    radarLabel: {
      fontSize: 16,
      color: '#555',
      marginBottom: 5,
    },
    radarValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007AFF',
    },
    additionalContentContainer: {
      marginTop: 20,
      paddingHorizontal: 15,
    },
    divider: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 5,
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  keywordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  keywordTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 20,
  },
  keywordTag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  keywordText: {
    color: '#333',
  },
  iconSpacing: {
    marginLeft: 5,
  },
  selfIntroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 5,
  },
  selfIntroText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 5,
  },
  experienceCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
    logoutButton: {
      alignSelf: 'center',
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginTop: 60,
    },
    logoutButtonText: {
      fontSize: 14,
      color: '#000',
    },
  });
  
  export default styles;
  