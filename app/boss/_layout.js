import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="boss_mainscreen"
        options={{ title: '사장 메인화면' }} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="chatroomscreen"
        options={{ title: '사장 채팅방' }} 
        options={{ headerShown: false }}
      />
    </Stack>
  );
}