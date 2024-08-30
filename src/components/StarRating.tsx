import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StarRating = ({rating}: {rating: number}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <View style={styles.container}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="star" color="#1445F6" size={13} />
      ))}
      {halfStar && (
        <Icon key="half" name="star-half" color="#1445F6" size={13} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          name="star-outline"
          color="#1445F6"
          size={13}
        />
      ))}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
  },
});
