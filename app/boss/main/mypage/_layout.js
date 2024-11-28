import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
       <Stack.Screen
        name="mypage_editscreen"
        options={{ 
          title: '내 정보 수정',
          headerTitleAlign: 'center',
        }}
      />
         <Stack.Screen
        name="mypagescreen"
        options={{ 
          title: '마이페이지',
          headerTitleAlign: 'center',
          
        }}
      />
    
      <Stack.Screen
        name="boss.modification"
     
          options={{ title: 'boss.modification', headerShown: false }} 
 
      />
    </Stack>
  );
}
