import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // 원하는 높이 설정
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#000',
  },
});

export default styles