import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Review from './Review';
import {Review as UsersReview} from '../../types/interfaces';
import EmptySpace from '../EmptySpace';

const Reviews = ({reviews}: {reviews: UsersReview[]}) => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={reviews}
      scrollEnabled={false}
      renderItem={({item, index}) => (
        <Review
          name={item.userName}
          occupation={item.userOccupation}
          rating={item.rating}
          review={item.review}
          position={index}
        />
      )}
      ListFooterComponent={<EmptySpace />}
    />
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginTop: 30,
  },
});
