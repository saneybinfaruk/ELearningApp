import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import RegularText from '../RegularText';
import StarRating from '../StarRating';
import {Colors} from '../../theme/MyColors';
import ExtraBoldText from '../ExtraBoldText';
import ExpendableText from './ExpendableText';
import CourseInfo from '../CourseInfo';
import Skills from '../Skills';
import {Course} from '../../types/interfaces';

interface Props {
  course: Course;
}
const Overview = ({course}: Props) => {
  const {
    courseName,
    instructorName,
    rating,
    price,
    description,
    courseDuration,
    discountAmount,
  } = course;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.contentContainer}>
          <View style={styles.nameContainer}>
            <RegularText style={styles.nameText}>{courseName}</RegularText>
            <RegularText style={styles.authorName}>
              By {instructorName}
            </RegularText>
            <StarRating rating={rating} />
          </View>

          <View style={styles.priceContainer}>
            <ExtraBoldText>{price}$</ExtraBoldText>
            <RegularText style={styles.authorName}>
              Loream Ipsum Text
            </RegularText>
          </View>
        </View>

        <ExpendableText
          children={`${description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quam recusandae reprehenderit ex, obcaecati accusantium neque dolore. Suscipit dicta voluptatem, eligendi mollitia nihil fugit, accusantium, optio odit sit maiores eos.`}
        />
      </View>

      <CourseInfo
        courseDuration={courseDuration}
        discount={discountAmount}
        lessons=""
      />

      <Skills skills={course.skills} />
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 30, 
    
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    gap: 2,
    marginVertical: 15,
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorName: {
    fontFamily: 'PlusJakartaSans-Light',
    fontSize: 10,
    color: Colors.lightText,
  },
  description: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-ExtraLight',
    color: Colors.lightText,
  },
  priceContainer: {
    alignItems: 'center',
    marginRight: 25,
  },
  readMoreText: {
    color: Colors.primaryDarkColor,
    fontSize: 12,
  },
});
