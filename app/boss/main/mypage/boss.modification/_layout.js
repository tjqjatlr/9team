import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
    <Stack.Screen
        name="change_contactscreen"
        options={{ 
          title: '연락처 변경',
          headerTitleAlign: 'center',
          
        }}
      />
      <Stack.Screen
        name="change_passwordscreen"
        options={{ 
          title: '비밀번호 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="change_addressscreen"
        options={{ 
          title: '주소 변경',
          headerTitleAlign: 'center',
        }}
      />
      
    </Stack>
  );
}
