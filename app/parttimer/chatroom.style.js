import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    tintColor: '#D3D3D3', 
  },
  text: {
    fontSize: 14,
    color: '#A9A9A9',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#66ABBA', 
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default styles;
