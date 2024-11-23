import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import BottomTab_a from './BottomTab_a';
import styles from './favoritelist.style';

const FavoriteList = () => {
  const router = useRouter();

  // 찜목록 데이터를 관리하는 상태
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      title: '노티드',
      location: '서울 강남구',
      image: require('../../assets/knotted.jpg'),
      isBookmarked: true,
      time: '시간 10:00 ~ 14:00',
      wage: '시급 10,000원',
      tag: '주방',
    },
    {
      id: '2',
      title: '편의점 야간 알바',
      location: '서울 송파구',
      image: require('../../assets/cu.jpg'),
      isBookmarked: false,
      time: '시간 22:00 ~ 06:00',
      wage: '시급 12,000원',
      tag: '카운터',
    },
  ]);

  const toggleBookmark = (id) => {
    setFavorites((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      )
    );
  };

  const renderJobItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push('parttimer/jobdetail')}
      style={styles.jobItem}
    >
      <Image source={item.image} style={styles.jobImage} />
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobLocation}>{item.location}</Text>
        <TouchableOpacity
          style={[
            styles.bookmarkContainer,
            item.isBookmarked && styles.bookmarkContainerSelected,
          ]}
          onPress={() => toggleBookmark(item.id)}
        >
          <FontAwesome
            name="heart"
            size={14}
            color={item.isBookmarked ? '#FFFFFF' : '#FF6B6B'}
          />
          <Text
            style={[
              styles.bookmarkText,
              item.isBookmarked && styles.bookmarkTextSelected,
            ]}
          >
            찜
          </Text>
        </TouchableOpacity>
        <Text style={styles.jobTimeWage}>{`${item.time} / ${item.wage}`}</Text>
        <Text style={styles.jobTag}>{item.tag}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        // 데이터가 없을 때
        <View style={styles.emptycontainer}>
          <Image
            source={require('../../assets/nofavorites.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>찜한 일자리가 없어요...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('parttimer/findparttimer')}
          >
            <Text style={styles.buttonText}>일자리 찾으러 가기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // 데이터가 있을 때
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderJobItem}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      )}
      <BottomTab_a />
    </View>
  );
};

export default FavoriteList;
