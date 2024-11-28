import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
       <Stack.Screen
        name="parttimerdetailscreen"
        options={{ title: '알바생상세페이지', headerShown: false }} 
      />
      <Stack.Screen
        name="report_b"
        options={{ title: '알바생 신고하기' }} 
      />
    </Stack>
  );
}
