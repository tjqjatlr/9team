import { Stack } from 'expo-router';
import CustomHeader from './CustomHeader';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home_a"
        options={{ title: '알바 홈', headerShown: false }} 
      />
      <Stack.Screen
        name="findparttimer"
        options={{ 
          title: '알바찾기', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="알바찾기"/>
        }} 
      />
      <Stack.Screen
        name="jobdetail"
        options={{ 
          title: '공고 상세페이지', 
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen
        name="chatroom"
        options={{ 
          title: '알바 채팅방', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="채팅방"/>
        }}
      />
      <Stack.Screen
        name="favoritelist"
        options={{ 
          title: '찜 목록', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="찜목록"/>
        }}
      />
      <Stack.Screen
        name="scheduler"
        options={{ 
          title: '근무 일정',
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="근무일정"/>
        }}
      />
      <Stack.Screen
        name="mypage"
        options={{ 
          title: '마이페이지', 
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="report"
        options={{ 
          title: '구인글 신고하기',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
