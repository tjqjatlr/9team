import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }} 
      />
      </Stack>
  )
}