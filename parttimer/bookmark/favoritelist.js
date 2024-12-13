import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { BottomTab_a } from '../../components/';
import styles from './favoritelist.style';

const FavoriteList = () => {
  const router = useRouter();

  // 찜목록 데이터를 관리하는 상태
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      title: '노티드',
      subtitle: '[노티드 충남 아산점] 조리',
      address: '충남 천안시 동남구 만남로 43 B관 4층',
      time: '19:00~23:00',
      wage: '시급 20,000원',
      image: require('../../../assets/knotted.jpg'),
      tag: '주방',
      isBookmarked: true,
      startDate: '2024-12-12',
      latitude: 36.8141,
      longitude: 127.1111,
    },
    {
      id: '2',
      title: '고클린',
      subtitle: '[고클린 충남 아산점] 문서작성',
      address: '충남 아산시 신창면 온천대로 1058 양우아파트상가115동206호',
      time: '09:00~12:00',
      wage: '시급 10,000원',
      image: require('../../../assets/goclean.jpg'),
      tag: '사무보조',
      isBookmarked: false,
      startDate: '2024-12-12',
      latitude: 36.7946,
      longitude: 127.1143,
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
      onPress={() =>
        router.push({
          pathname: 'parttimer/findjobs/detail/jobdetail',
          params: { job: JSON.stringify(item) },
        })
      }
      style={styles.jobItem}
    >
      <Image source={item.image} style={styles.jobImage} />
      <View style={styles.jobDetails}>
        <View style={styles.titleContainer}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.jobLocation}>{item.startDate}</Text>
        </View>
        <Text style={styles.jobLocation}>{item.subtitle}</Text>
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
            source={require('../../../assets/nofavorites.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>찜한 일자리가 없어요...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('parttimer/findjobs/findparttimer')}
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
