import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="boss_mainscreen"
        options={{ title: '사장 메인화면', headerShown: false }} 
      />
      <Stack.Screen
        name="chatroomscreen"
        options={{ title: '사장 채팅방', headerShown: false }} 
      />
      <Stack.Screen
        name="favoritesscreen"
        options={{ title: '찜 목록', headerShown: false }} 
      />
      <Stack.Screen
        name="shiftschedulescreen"
        options={{ title: '근무일정', headerShown: false }} 
      />
      <Stack.Screen
        name="findparttimerscreen"
        options={{ title: '인재 찾기', headerShown: false }} 
      />
      <Stack.Screen
        name="jobselectionscreen"
        options={{ title: '채용_직무선택', headerShown: false }} 
      />
      <Stack.Screen
        name="jobdetailsscreen"
        options={{ title: '채용_업무선택 ', headerShown: false }} 
      />
      <Stack.Screen
        name="jobcontentscreen"
        options={{ title: '채용_제목내용 ', headerShown: false }} 
      />
      <Stack.Screen
        name="joblocationscreen"
        options={{ title: '채용_근무지', headerShown: false }} 
      />
      <Stack.Screen
        name="jobpostingscreen"
        options={{ title: '채용_근무날짜', headerShown: false }} 
      />
      <Stack.Screen
        name="jobtimeselectionscreen"
        options={{ title: '채용_시작시간', headerShown: false }} 
      />
       <Stack.Screen
        name="endtimeselectionscreen"
        options={{ title: '채용_종료시간', headerShown: false }} 
      />
        <Stack.Screen
        name="wageselectionscreen"
        options={{ title: '채용_급여설정', headerShown: false }} 
      />
        <Stack.Screen
        name="paymentselectionscreen"
        options={{ title: '채용_구인글등록', headerShown: false }} 
      />
      <Stack.Screen
        name="jobpostionsscreen"
        options={{ title: '나의공고문',headerShown: false}} 
      />
      <Stack.Screen
        name="editjobscreen"
        options={{ title: '구인글 수정',headerShown: false }} 
      />
      <Stack.Screen
        name="boss.editpage"
        options={{ title: '사장_수정', headerShown: false }} 
      />
      <Stack.Screen
        name="recruitmentmanagementscreen"
        options={{ title: '채용관리', headerShown: false }} 
      />
        <Stack.Screen
        name="profilecard"
        options={{ title: 'AI추천', headerShown: false }} 
      />
      <Stack.Screen
        name="parttimerdetailscreen"
        options={{ title: '알바생상세페이지', headerShown: false }} 
      />
      <Stack.Screen
        name="report_b"
        options={{ title: '알바생 신고하기' }} 
      />
      <Stack.Screen
        name="mypagescreen"
        options={{ 
          title: '마이페이지',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="mypage_editscreen"
        options={{ 
          title: '내 정보 수정',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="boss.modification/change_contactscreen"
        options={{ 
          title: '연락처 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="boss.modification/change_passwordscreen"
        options={{ 
          title: '비밀번호 변경',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="boss.modification/change_addressscreen"
        options={{ 
          title: '주소 변경',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
