import React , { useState }from 'react';
import { View, Text, ScrollView, Image, FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Boss_BottomTab from './boss_bottomtab'; // 하단바 컴포넌트
import styles from './favoritesscreen.style';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const FavoritesScreen = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      title: '안성재',
      location: '서울 강남구',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLyySSE5U6i1ikBYS5hp-pjvrarAxKqJQ_A&s',
      isBookmarked: true,
      message: '저는 부지런하답니다 연락 주세요',
      tag: 'INTJ',
    },
    {
      id: '2',
      title: '정지선',
      location: '서울 송파구',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUhokW7-Dmb7_J3adfQutjyKZUe4P99J4PQ&s',
      isBookmarked: false,
      message: '일할 준비 만빵! 연락주세요',
      tag: 'ENFP',
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
      onPress={() => router.push('boss/main/parttimerdetail/parttimerdetailscreen')}
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
        <Text style={styles.jobTimeWage}>{`${item.message}`}</Text>
        <Text style={styles.jobTag}>{item.tag}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>찜 목록</Text>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {favorites.length === 0 ? (
        // 데이터가 없을 때
        <View style={styles.emptycontainer}>
          <Image
            source={require('../../../../assets/nofavorites.png')}
            style={styles.icon}
          />
          <Text style={styles.text}>찜한 일자리가 없어요...</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('boss/main/boss_bottomtab/findparttimer')}
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
      <Boss_BottomTab />
    </View>
  );
};

export default FavoritesScreen;
