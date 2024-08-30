import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/MyColors';
import MediumText from './MediumText';
import RegularText from './RegularText';
import StarRating from './StarRating';
import ProgressBar from './ProgressBar';
import placeholderImage from '../../assets/photos/details_placeholder.png';

interface Props {
  title: string;
  instructor: string;
  parcentage: number;
  rating: number;
  imageUrl: string;
  onPress: () => void;
}
const CardLayout = ({
  title,
  instructor,
  parcentage,
  rating,
  imageUrl,
  onPress,
}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: imageUrl,
        }}
        defaultSource={placeholderImage}
        style={styles.image}
      />

      <View style={styles.contentContainer}>
        <RegularText style={styles.nameText} numberOfLines={2}>
          {title}
        </RegularText>
        <View style={styles.ratingContainer}>
          <StarRating rating={rating} />
        </View>
      </View>

      <RegularText style={styles.authorText}>By {instructor}</RegularText>

      <ProgressBar progress={parseFloat(parcentage.toFixed(2))} />
    </Pressable>
  );
};

export default CardLayout;

const styles = StyleSheet.create({
  container: {
    width: 166,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 184,
    objectFit: 'cover',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 15,
  },

  contentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  ratingContainer: {flex: 0.8, marginTop: 4},
  authorText: {fontSize: 12, color: '#8D8989'},
});
