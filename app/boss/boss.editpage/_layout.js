import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      
      <Stack.Screen
        name="edit.jobdetailsscreen"
        options={{ title: '채용_업무선택 ', headerShown: false }} 
      />
      <Stack.Screen
        name="edit.jobcontentscreen"
        options={{ title: '채용_제목내용 ', headerShown: false }} 
      />
      <Stack.Screen
        name="edit.joblocationscreen"
        options={{ title: '채용_근무지', headerShown: false }} 
      />
      <Stack.Screen
        name="edit.jobpostingscreen"
        options={{ title: '채용_근무날짜', headerShown: false }} 
      />
      <Stack.Screen
        name="edit.jobtimeselectionscreen"
        options={{ title: '채용_시작시간', headerShown: false }} 
      />
        <Stack.Screen
        name="edit.wageselectionscreen"
        options={{ title: '채용_급여설정', headerShown: false }} 
      />
      
    </Stack>
  );
}
