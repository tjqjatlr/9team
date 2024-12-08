import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import styles from './[id].style';

const ChatRoomDetail = () => {
  const { title, messages } = useLocalSearchParams(); // 채팅방 제목과 메시지 데이터 받아오기
  const parsedMessages = JSON.parse(messages); // 문자열 메시지 데이터를 JSON으로 변환

  const [newMessage, setNewMessage] = useState(''); // 새 메시지 상태
  const [chatMessages, setChatMessages] = useState(parsedMessages); // 메시지 목록 상태

  // 메시지 보내는 함수
  const sendMessage = () => {
    if (newMessage.trim()) {
      const newChatMessage = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toISOString(), // ISO 형식 타임스탬프
      };
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]); // 새 메시지 추가
      setNewMessage(''); // 입력 필드 초기화
    }
  };

  // 날짜 구분선 추가 및 메시지 렌더링 함수
  const renderMessage = ({ item, index }) => {
    const isNewDay =
      index === 0 ||
      new Date(item.timestamp).toLocaleDateString() !==
        new Date(chatMessages[index - 1]?.timestamp).toLocaleDateString();

    const formattedTime = new Date(item.timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    return (
      <View>
        {isNewDay && (
          <View style={styles.dateSeparator}>
            <Text style={styles.dateText}>{new Date(item.timestamp).toLocaleDateString()}</Text>
          </View>
        )}
        <View
          style={[
            styles.messageContainer,
            item.sender === 'me' ? styles.myMessage : styles.otherMessage,
          ]}
        >
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timestamp}>{formattedTime}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatMessages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="메시지를 입력하세요"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>보내기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatRoomDetail;
