import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomTab_a from './BottomTab_a';
import styles from './findparttimer.style';

const jobListings = [
    {
        id: '1',
        title: '노티드',
        location: '[노티드 충남 아산점] 조리',
        time: '19:00~23:00',
        wage: '시급 20,000원',
        image: require('../../assets/knotted.jpg'),
        tag: '주말',
        isBookmarked: false,
    },
    {
        id: '2',
        title: '고클린',
        location: '[고클린 충남 아산점] 문서작성',
        time: '09:00~12:00',
        wage: '시급 10,000원',
        image: require('../../assets/goclean.jpg'),
        tag: '사무보조',
        isBookmarked: false,
    },
    {
        id: '3',
        title: 'CU',
        location: '[CU 충남 아산점] 상품포장',
        time: '19:00~23:00',
        wage: '시급 9,900원',
        image: require('../../assets/cu.jpg'),
        tag: '매장관리',
        isBookmarked: false,
    },
];

const FindPartTimer = () => {
    const [listings, setListings] = useState(jobListings);
    const [selectedTab, setSelectedTab] = useState('단기알바');
    const [selectedDate, setSelectedDate] = useState(null);

    const toggleDateSelection = (date) => {
        setSelectedDate(selectedDate === date ? null : date);
    };

    const toggleBookmark = (id) => {
        setListings((prevListings) =>
            prevListings.map((item) =>
                item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
            )
        );
    };

    const renderJobItem = ({ item }) => (
        <View style={styles.jobItem}>
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
        color={item.isBookmarked ? '#FFFFFF' : '#A9A9A9'} 
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
        </View>
    );

    const tabs = ['단기알바', '급구알바', '중기알바'];
    const dates = [
        { day: '오늘', date: '12일' },
        { day: '화', date: '13일' },
        { day: '수', date: '14일' },
        { day: '목', date: '15일' },
        { day: '금', date: '16일' },
        { day: '토', date: '17일' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.location}>충남 아산시 ▼</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabs}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        style={[
                            styles.tab,
                            selectedTab === tab && styles.activeTab,
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                selectedTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Date Selector */}
            <View style={styles.dateSelector}>
                {dates.map(({ day, date }) => (
                    <TouchableOpacity
                        key={date}
                        onPress={() => toggleDateSelection(date)}
                        style={[
                            styles.dateContainer,
                            selectedDate === date && styles.selectedDateContainer,
                        ]}
                    >
                        <Text
                            style={[
                                styles.dateText,
                                selectedDate === date && styles.selectedDateText,
                            ]}
                        >
                            {day}
                        </Text>
                        <Text
                            style={[
                                styles.dateText,
                                selectedDate === date && styles.selectedDateText,
                            ]}
                        >
                            {date}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Job Listings */}
            <FlatList
                data={listings}
                renderItem={renderJobItem}
                keyExtractor={(item) => item.id}
            />

            <BottomTab_a />
        </View>
    );
};

export default FindPartTimer;
