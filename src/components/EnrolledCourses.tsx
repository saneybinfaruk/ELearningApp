import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MediumText from './MediumText';
import RegularText from './RegularText';
import CardLayout from './CardLayout';
import {Course, GetCoursesData} from '../types/interfaces';
import {useQuery} from '@apollo/client';
import {GET_COURSES_BY_TYPE} from '../types/graphqlQueries';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

interface Props {
  label: string;
  onPress: () => void;
  itemPress: (id: number) => void;
}
const EnrolledCourses = ({label, onPress, itemPress}: Props) => {
  const {enrolledCourses} = useSelector(
    (state: RootState) => state.enrolledCourses,
  );

  if (enrolledCourses.length === 0) return null;
  return (
    <View>
      {/* list title , see all button */}
      <View style={styles.headingContainer}>
        <RegularText style={styles.headingText}>{label}</RegularText>
        <TouchableOpacity onPress={onPress}>
          <MediumText style={styles.btn}>See All</MediumText>
        </TouchableOpacity>
      </View>

      {/** horizontal list of items */}
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={enrolledCourses}
        renderItem={({item: {course}}) => (
          <CardLayout
            imageUrl={course.imageUrl}
            parcentage={60}
            rating={course.rating}
            onPress={() => itemPress(course.id)}
            title={course.courseName}
            instructor={course.instructorName}
          />
        )}
        horizontal
      />
    </View>
  );
};

export default EnrolledCourses;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    color: '#8D8989',
  },
  listContainer: {
    marginVertical: 12,
  },
});
