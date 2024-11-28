import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
          <Stack.Screen
        name="jobpostionsscreen"
        options={{ title: '나의공고문',headerShown: false}} 
      />
         <Stack.Screen
        name="recruitmentmanagementscreen"
        options={{ title: '채용관리', headerShown: false }} 
      />
      
    </Stack>
  );
}
