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
    </Stack>
  );
}