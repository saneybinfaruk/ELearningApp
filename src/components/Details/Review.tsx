import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import avatar1 from '../../../assets/photos/avater_1.png';
import avatar2 from '../../../assets/photos/avater_2.png';
import SemiBoldText from '../SemiBoldText';
import RegularText from '../RegularText';
import StarRating from '../StarRating';
import {Colors} from '../../theme/MyColors';

interface Props {
  name: string;
  occupation: string;
  rating: number;
  review: string;
  position: number;
}
const Review = ({name, occupation, rating, review, position}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: position % 2 === 0 ? '#F6EAF7' : 'white'},
      ]}>
      <View style={styles.contentContainer}>
        <View style={styles.nameContainer}>
          <Image source={position % 2 === 0 ? avatar1 : avatar2} />
          <View>
            <SemiBoldText style={styles.nameText}>{name}</SemiBoldText>
            <RegularText style={styles.occupationText}>
              {occupation}
            </RegularText>
          </View>
        </View>
        <View style={{}}>
          <StarRating rating={rating} />
        </View>
      </View>
      <RegularText style={styles.reviewText}>{review}</RegularText>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6EAF7',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 40,
    marginVertical: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {flexDirection: 'row', alignItems: 'center', gap: 10},
  nameText: {
    fontSize: 15,
  },
  occupationText: {
    fontFamily: 'PlusJakartaSans-Light',
    fontSize: 13,
  },
  reviewText: {
    color: 'black',
    marginTop: 12,
    marginBottom: 20,
  },
});
