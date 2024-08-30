import {Image, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/MyColors';
import MediumText from '../MediumText';
import RegularText from '../RegularText';
import StarRating from '../StarRating';
import ProgressBar from '../ProgressBar';
import placeholderImage from '../../assets/photos/details_placeholder.png';
import Skeleton from './Skeleton';

const SkeletonCard = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.image} />

      <Skeleton style={{height: 25, width: '100%'}} />
      <Skeleton style={{height: 25, width: '60%'}} />

      <Skeleton style={{height: 25, width: '100%'}} />
    </View>
  );
};

export default SkeletonCard;

const styles = StyleSheet.create({
  container: {
    width: 166,
    marginRight: 20,
    gap: 5,
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
  authorText: {},
});
