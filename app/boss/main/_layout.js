import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
         <Stack.Screen
        name="boss_mainscreen"
        options={{ title: '사장 메인화면', headerShown: false }} 
      /> 
        <Stack.Screen
        name="parttimercard"
        options={{ title: 'parttimercard', headerShown: false }} 
      />
      <Stack.Screen
        name="mypage"
        options={{ title: 'mypage', headerShown: false }} 
      />
      
      <Stack.Screen
        name="posting"
        options={{ title: 'posting', headerShown: false }} 
      />
      <Stack.Screen
        name="boss_bottomtab"
        options={{ title: 'boss_bottomtab', headerShown: false }} 
      />
       <Stack.Screen
        name="parttimerdetail"
        options={{ title: 'parttimerdetail', headerShown: false }} 
      />
      <Stack.Screen
        name="hiring"
        options={{ title: 'hiring', headerShown: false }} 
      />
     
    </Stack>
  );
}
