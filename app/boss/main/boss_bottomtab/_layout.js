import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
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
      <Stack.Screen
        name="findparttimerscreen"
        options={{ title: '인재 찾기', headerShown: false }} 
      />
        <Stack.Screen
        name="profilecard"
        options={{ title: 'AI추천', headerShown: false }} 
      />
      <Stack.Screen
        name="chatroom/[id]"
        options={({ route }) => ({
          headerTitle: route.params?.title || '채팅방',
          headerTitleAlign: 'center',
        })}
      />
    </Stack>
  );
}
