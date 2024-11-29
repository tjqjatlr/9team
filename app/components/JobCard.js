import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './jobCard.style';

const JobCard = ({ item, onDelete, onReviewPress  }) => {
  return (
    <View style={styles.jobCard}>
      {item.status === '완료' && (
        <TouchableOpacity style={styles.closeButton} onPress={() => onDelete(item.id)}>
          <Ionicons name="close" size={20} color="black" />
        </TouchableOpacity>
      )}
      <View style={styles.profileStatusContainer}>
        <Image source={item.image} style={styles.jobImage} />
        <Text style={styles.jobStatus}>{item.status}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.jobTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        {item.info_time && <Text style={styles.jobInfo}>{item.info_time}</Text>}
        {item.info_pay && <Text style={styles.jobInfo}>{item.info_pay}</Text>}
        <Text style={styles.jobTag}>{item.tag}</Text>
      </View>
      {item.status === '완료' && (
        <TouchableOpacity style={styles.reviewButton} onPress={() => onReviewPress(item)}>
          <Text style={styles.reviewButtonText}>평가</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default JobCard;