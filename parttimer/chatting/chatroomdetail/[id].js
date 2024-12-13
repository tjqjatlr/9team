import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import styles from './[id].style';

const ChatRoomDetail = () => {
  const { title, messages } = useLocalSearchParams(); 
  const parsedMessages = JSON.parse(messages); 

  const [newMessage, setNewMessage] = useState(''); 
  const [chatMessages, setChatMessages] = useState(parsedMessages); 

  // 메시지 보내는 함수
  const sendMessage = () => {
    if (newMessage.trim()) {
      const newChatMessage = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toISOString(),
      };
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);
      setNewMessage(''); 
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
