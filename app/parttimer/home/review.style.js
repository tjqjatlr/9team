import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 15,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 8,
  },
  reviewItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  reviewTitle: {
    fontSize: 16,
    flex: 1,
  },
  starsContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  scoreText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    width: 80,
    height:30,
    alignItems: 'center',
    backgroundColor:'#007BFF',
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 150,
  },
  footerText: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
