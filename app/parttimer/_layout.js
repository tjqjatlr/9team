import { Stack } from 'expo-router';
import CustomHeader from './CustomHeader';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home_a"
        options={{ title: '알바 홈', headerShown: false }} 
      />
      <Stack.Screen
        name="findparttimer"
        options={{ 
          title: '알바찾기', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="알바찾기"/>
        }} 
      />
      <Stack.Screen
        name="chatroomscreen"
        options={{ title: '사장 채팅방', headerShown: false }} 
      />
      <Stack.Screen
        name="favoritesscreen"
        options={{ title: '찜 목록', headerShown: false }} 
      />
      <Stack.Screen
        name="shiftschedulescreen"
        options={{ title: '근무일정', headerShown: false }} 
      />
    
    </Stack>
  );
}
