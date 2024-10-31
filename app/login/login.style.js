import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6ebed',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#76b0c5',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#76b0c5',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  optionText: {
    color: '#76b0c5',
  },
  optionSeparator: {
    marginHorizontal: 5,
    color: '#aaa',
  },
  socialLoginText: {
    color: '#aaa',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerContainer: {
    flexDirection: 'row',
  },
  registerText: {
    color: '#aaa',
  },
  registerLink: {
    color: '#76b0c5',
    marginLeft: 5,
  },
});

export default styles;
