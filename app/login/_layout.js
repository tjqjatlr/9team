import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="signup"
        options={{ title: '회원가입' }}
        
      />
      <Stack.Screen
        name="signup_info"
        options={{ title: '알바로 가입' }}
      />
      <Stack.Screen
        name="signup_info_b"
        options={{ title: '사장님으로 가입' }}
      />
      <Stack.Screen
        name="propensity"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="propensity_test"
        options={{ title: '성향 검사' }} 
      />
      <Stack.Screen
        name="propensity_result"
        options={{ title: '검사 결과' }} 
      />
      <Stack.Screen
        name="boss_mainscreen"
        options={{ title: '사장 메인화면' }} 
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="chatroomscreen"
        options={{ title: '사장 채팅방' }} 
        options={{ headerShown: false }}
      />
    </Stack>
  );
}