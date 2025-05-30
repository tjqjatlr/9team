import { Stack } from 'expo-router';
import CustomHeader from '../components/CustomHeader';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home/home_a"
        options={{ title: '알바 홈', headerShown: false }} 
      />
      <Stack.Screen
        name="findjobs/findparttimer"
        options={{ 
          title: '알바찾기', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="알바찾기"/>
        }} 
      />
      <Stack.Screen
        name="findjobs/detail/jobdetail"
        options={{ 
          title: '공고 상세페이지', 
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen
        name="chatting/chatroom"
        options={{ 
          title: '알바 채팅방', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="채팅방"/>
        }}
      />
      <Stack.Screen
        name="chatting/chatroomdetail/[id]"
        options={({ route }) => ({
          headerTitle: route.params?.title || '채팅방',
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="bookmark/favoritelist"
        options={{ 
          title: '찜 목록', 
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="찜목록"/>
        }}
      />
      <Stack.Screen
        name="schedule/scheduler"
        options={{ 
          title: '근무 일정',
          headerBackVisible: false,
          headerTitle: () => <CustomHeader title="근무일정"/>
        }}
      />
      <Stack.Screen
        name="home/myinfomation/mypage"
        options={{ 
          title: '마이페이지', 
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="findjobs/detail/report"
        options={{ 
          title: '구인글 신고하기',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/review"
        options={{ 
          title: '리뷰',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/myinfomation/mypage_edit"
        options={{ 
          title: '내 정보 수정',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/myinfomation/edit/change_contact"
        options={{ 
          title: '연락처 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/myinfomation/edit/change_password"
        options={{ 
          title: '비밀번호 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/myinfomation/edit/change_address"
        options={{ 
          title: '주소 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/myinfomation/edit/set_amount"
        options={{ 
          title: '목표 금액 설정',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="home/myinfomation/edit/set_preferred_time"
        options={{ 
          title: '선호 시간 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="recommendation/profilecard_a"
        options={{ title: '바로추천', headerShown: false }} 
      />
    </Stack>
  );
}
