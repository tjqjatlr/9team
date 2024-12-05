import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
       <Stack.Screen
        name="jobselectionscreen"
        options={{ title: '채용_직무선택', headerShown: false}} 
      />
      <Stack.Screen
        name="jobdetailsscreen"
        options={{ title: '근무정보 추가' }} 
      />
      <Stack.Screen
        name="jobcontentscreen"
        options={{ title: '근무정보 추가' }} 
      />
      <Stack.Screen
        name="joblocationscreen"
        options={{ title: '근무정보 추가'}} 
      />
      <Stack.Screen
        name="jobpostingscreen"
        options={{ title: '구인글 등록' }} 
      />
      <Stack.Screen
        name="jobtimeselectionscreen"
        options={{ title: '구인글 등록'}} 
      />
       <Stack.Screen
        name="endtimeselectionscreen"
        options={{ title: '구인글 등록' }} 
      />
        <Stack.Screen
        name="wageselectionscreen"
        options={{ title: '구인글 등록' }} 
      />
        <Stack.Screen
        name="paymentselectionscreen"
        options={{ title: '구인글 등록'}} 
      />
       <Stack.Screen
        name="hiring.editpage"
        options={{ title: 'hiring.editpage' }} 
      />
      
    </Stack>
  );
}
