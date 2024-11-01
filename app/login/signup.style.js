import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d8db',
    paddingTop: 20,
    alignItems: 'center', 
  },
  optionContainer: {
    width: '75%', 
    backgroundColor: '#f4f5f7',
    marginVertical: 25,
    paddingVertical: 70, 
    borderRadius: 15,
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#f9ec35',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, 
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  ownerButton: {
    backgroundColor: '#8ecafc',
  },
});

export default styles;
