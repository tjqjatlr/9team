import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen
        name="reviewscreen"
        options={{ 
          title: '리뷰',
          headerTitleAlign: 'center',
        }}
      />
       
    </Stack>
  );
}
