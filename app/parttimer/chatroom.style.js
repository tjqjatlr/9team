import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  emptycontainer: {
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
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: '#A9A9A9',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#66ABBA',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  chatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  chatDetails: {
    flex: 1,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333333',
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#777777',
  },
  chatTimestamp: {
    fontSize: 12,
    color: '#A9A9A9',
    textAlign: 'right',
  },
});

export default styles;
