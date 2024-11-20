import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  card: (screenWidth) => ({
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  }),
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  arrowLeft: (screenHeight) => ({
    position: 'absolute',
    left: 10,
    top: screenHeight * 0.3,
  }),
  arrowRight: (screenHeight) => ({
    position: 'absolute',
    right: 10,
    top: screenHeight * 0.3,
  }),
  infoBox: {
    backgroundColor: '#d9f1ff',
    borderRadius: 10,
    padding: 15,
    width: '80%',
    marginBottom: 20,
    marginTop: 100,
  },
  infoText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  likeButton: {
    backgroundColor: '#ffe7e7',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  proposeButton: {
    backgroundColor: '#e3f7d9',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitleContainer: {
    justifyContent: 'center',  // 가운데 정렬
    alignItems: 'center',      // 가운데 정렬
    paddingVertical: 20,       // 상하 여백 추가
  },
  subtitle: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',  // 약간 투명하게
    fontWeight: 'normal',
  },
});

export default styles;
