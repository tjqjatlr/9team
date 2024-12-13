import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Clipboard from 'expo-clipboard';
import { MapViewComponent } from '../../../components';
import styles from './jobdetail.style';

const JobDetail = () => {
    const { job } = useLocalSearchParams();
    const router = useRouter();
    const jobData = job ? JSON.parse(job) : null;

    if (!jobData) {
        return (
            <View style={styles.container}>
                <Text>일치하는 잡 데이터를 찾을 수 없습니다.</Text>
            </View>
        );
    }

    const copyToClipboard = async () => {
        try {
            await Clipboard.setStringAsync(jobData.address);
            Alert.alert('알림', '주소가 복사되었습니다.');
        } catch (error) {
            Alert.alert('오류', '주소 복사 중 문제가 발생했습니다.');
        }
    };

    const openGoogleMaps = () => {
        const address = encodeURIComponent(jobData.address);
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
        Linking.openURL(googleMapsUrl).catch(() =>
            Alert.alert('오류', '길찾기 기능을 실행할 수 없습니다.')
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {/* 상단 제목 */}
                <View style={styles.titleSection}>
                    <Text style={styles.title}>{jobData.subtitle}</Text>
                    <TouchableOpacity
                        style={styles.reportButton}
                        onPress={() => router.push('parttimer/findjobs/detail/report')}
                    >
                        <MaterialCommunityIcons name="alarm-light" size={24} color="#FF6B6B" />
                    </TouchableOpacity>
                </View>

                {/* 업체 정보 섹션 */}
                <View style={styles.infoSection}>
                    <Image source={jobData.image} style={styles.profileImage} />
                    <View style={styles.companyInfo}>
                        <Text style={styles.companyName}>{jobData.title}</Text>
                        <Text style={styles.verification}>사업자등록증 인증</Text>
                    </View>
                </View>

                {/* 상세 정보 */}
                <View style={styles.details}>
                    <Text style={styles.detailItem}>📅 {jobData.startDate}</Text>
                    <Text style={styles.detailItem}>🕒 {jobData.time}</Text>
                    <Text style={styles.detailItem}>💸 {jobData.wage}</Text>
                    <Text style={styles.detailItem}>📍 {jobData.address}</Text>
                </View>

                {/* 구분선 */}
                <View style={styles.separator} />

                {/* 근무 정보 섹션 */}
                <View style={styles.section}>
                    <Text style={styles.mainSectionTitle}>근무 정보</Text>
                    <View style={styles.iconWithText}>
                        <Image source={require('../../../../assets/location.png')} style={styles.icon} />
                        <Text style={styles.sectionTitle}>근무지</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.verticalLine} />
                        <MapViewComponent 
                            latitude={parseFloat(jobData.latitude)}
                            longitude={parseFloat(jobData.longitude)}
                            address={jobData.address || "주소 정보 없음"}
                            title={jobData.title || "근무지 위치"}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.smallCopyButton} onPress={copyToClipboard}>
                                <Text style={styles.copyButtonText}>주소 복사하기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.smallDirectionButton} onPress={openGoogleMaps}>
                                <Text style={styles.directionButtonText}>길찾기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* 업무 내용 */}
                <View style={styles.section}>
                    <View style={styles.iconWithText}>
                        <Image source={require('../../../../assets/work.png')} style={styles.icon} />
                        <Text style={styles.sectionTitle}>업무 내용</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.verticalLine} />
                        <Text style={styles.sectionContent}>{jobData.tag}</Text>
                    </View>
                </View>

                {/* 자격 요건 */}
                <View style={styles.section}>
                    <View style={styles.iconWithText}>
                        <Image source={require('../../../../assets/qualification.png')} style={styles.icon} />
                        <Text style={styles.sectionTitle}>자격 요건</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.verticalLine} />
                        <Text style={styles.sectionContent}>✔ 성실한 분</Text>
                        <Text style={styles.sectionContent}>✔ 책임감 있는 분</Text>
                        <Text style={styles.sectionContent}>✔ 팀워크 잘하는 분</Text>
                    </View>
                </View>

                {/* 추가 정보 */}
                <View style={styles.section}>
                    <View style={styles.iconWithText}>
                        <Image source={require('../../../../assets/info.png')} style={styles.icon} />
                        <Text style={styles.sectionTitle}>추가 정보</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.verticalLine} />
                        <Text style={styles.sectionContent}>
                            지원해주셔서 감사합니다! 짧은 기간이지만 함께 좋은 경험을 만들어봅시다.
                        </Text>
                    </View>
                </View>

                {/* 바로 리뷰 */}
                <View style={styles.section}>
                    <View style={styles.iconWithText}>
                        <Image source={require('../../../../assets/review.png')} style={styles.icon} />
                        <Text style={styles.sectionTitle}>바로 리뷰</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        <View style={styles.verticalLine} />
                        <View style={styles.reviewList}>
                            {[
                                { text: '쾌적한 작업환경', score: 4, icon: require('../../../../assets/pleasant.png') },
                                { text: '역할분담', score: 4, icon: require('../../../../assets/divide.png') },
                                { text: '유연한 근무시간', score: 4, icon: require('../../../../assets/workinghours.png') },
                            ].map((review, index) => (
                                <View key={index} style={styles.reviewItem}>
                                    <View style={styles.ratingBar}>
                                        <View style={[styles.ratingFill, { width: `${review.score * 20}%`, backgroundColor: '#CCF7FF' }]}>
                                            <Image source={review.icon} style={styles.reviewIconInsideGauge} />
                                            <Text style={styles.reviewTextInsideGauge}>{review.text}</Text>
                                        </View>
                                        <Text style={styles.reviewRatingInsideGauge}>{review.score}점</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* 하단 바텀탭 버튼 */}
            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <FontAwesome name="heart" size={20} color="#FF6B6B" />
                    <Text style={styles.bookmarkText}>찜</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButtonRight}>
                    <FontAwesome name="star" size={20} color="#3A78F2" />
                    <Text style={styles.tabButtonTextRight}>알바 지원</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default JobDetail;