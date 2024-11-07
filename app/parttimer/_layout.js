import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home_a"
        options={{ title: '사장 메인화면', headerShown: false }} 
      />
      <Stack.Screen
        name="findparttimer"
        options={{ title: '사장 메인화면', headerShown: false }} 
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
