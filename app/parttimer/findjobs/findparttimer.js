import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { BottomTab_a } from '../../components';
import styles from './findparttimer.style';

const jobListings = [
    {
        id: '1',
        title: '노티드',
        subtitle: '[노티드 충남 아산점] 조리',
        time: '19:00~23:00',
        wage: '시급 20,000원',
        image: require('../../../assets/knotted.jpg'),
        tag: '주방',
        isBookmarked: true,
    },
    {
        id: '2',
        title: '고클린',
        subtitle: '[고클린 충남 아산점] 문서작성',
        time: '09:00~12:00',
        wage: '시급 10,000원',
        image: require('../../../assets/goclean.jpg'),
        tag: '사무보조',
        isBookmarked: false,
    },
    {
        id: '3',
        title: 'CU',
        subtitle: '[CU 충남 아산점] 상품포장',
        time: '19:00~23:00',
        wage: '시급 9,900원',
        image: require('../../../assets/cu.jpg'),
        tag: '매장관리',
        isBookmarked: false,
    },
    {
        id: '4',
        title: 'CU',
        subtitle: '[CU 충남 아산점] 상품포장',
        time: '19:00~23:00',
        wage: '시급 9,900원',
        image: require('../../../assets/cu.jpg'),
        tag: '매장관리',
        isBookmarked: false,
    },
    {
        id: '5',
        title: 'CU',
        subtitle: '[CU 충남 아산점] 상품포장',
        time: '19:00~23:00',
        wage: '시급 9,900원',
        image: require('../../../assets/cu.jpg'),
        tag: '매장관리',
        isBookmarked: false,
    },
];

const FindPartTimer = () => {
    const [listings, setListings] = useState(jobListings);
    const [selectedDate, setSelectedDate] = useState(null);
    const [dates, setDates] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const today = new Date();
        const newDates = [];
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        const currentMonth = today.getMonth(); 

        for (let i = 0; i < 60; i++) {
            const currentDate = new Date();
            currentDate.setDate(today.getDate() + i);

            const day = i === 0 ? '오늘' : dayNames[currentDate.getDay()];
            const date = `${currentDate.getDate()}일`;
            const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
            const isMonthChanged = currentDate.getMonth() !== currentMonth; 

            newDates.push({ key, day, date, isMonthChanged, month: currentDate.getMonth() + 1 });
        }

        setDates(newDates);
    }, []);

    const toggleDateSelection = (key) => {
        setSelectedDate(selectedDate === key ? null : key);
    };

    const getMonth = () => {
        if (selectedDate) {
            const selected = dates.find((d) => d.key === selectedDate);
            return selected ? `${selected.month}월` : '';
        }

        const today = new Date();
        return `${today.getMonth() + 1}월`;
    };

    const toggleBookmark = (id) => {
        setListings((prevListings) =>
            prevListings.map((item) =>
                item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
            )
        );
    };

    const renderJobItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => router.push('parttimer/findjobs/detail/jobdetail')}
            style={styles.jobItem}
        >
            <Image source={item.image} style={styles.jobImage} />
            <View style={styles.jobDetails}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobSubtitle}>{item.subtitle}</Text>
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
                <View style={styles.jobTimeWage}>
                    <Text style={styles.jobTimeWage}>{`${item.time} / ${item.wage}`}</Text>
                </View>
                <Text style={styles.jobTag}>{item.tag}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.location}>충남 아산시 ▼</Text>
            </View>

            {/* Date Selector */}
            <View style={styles.dateSelector}>
                {/* 동적으로 변경되는 달 표시 */}
                <Text style={styles.monthText}>{getMonth()}</Text>

                {/* 날짜 리스트 */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.dateContainerStyle}
                >
                    {dates.map(({ key, day, date, isMonthChanged }) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => toggleDateSelection(key)}
                            style={[
                                styles.dateContainer,
                                selectedDate === key && styles.selectedDateContainer,
                                isMonthChanged && styles.monthChangedDateContainer, // 월 변경시 배경색 변경
                            ]}
                        >
                            <Text
                                style={[
                                    styles.dateText,
                                    selectedDate === key && styles.selectedDateText,
                                ]}
                            >
                                {day}
                            </Text>
                            <Text
                                style={[
                                    styles.dateText,
                                    selectedDate === key && styles.selectedDateText,
                                ]}
                            >
                                {date}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Job Listings */}
            <FlatList
                data={listings}
                renderItem={renderJobItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 60 }}
            />

            <BottomTab_a />
        </View>
    );
};

export default FindPartTimer;
