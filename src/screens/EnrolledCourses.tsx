import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import placeholder from '../../assets/photos/details_placeholder.png';
import {Colors} from '../theme/MyColors';
import BoldText from '../components/BoldText';
import RegularText from '../components/RegularText';
import ProgressBar from '../components/ProgressBar';
import CourseLayout from '../components/CourseLayout';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';
import useBottomBarVisibility from '../hook/useBottomBarVisibility';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import EmptyPlaceholder from '../components/EmptyPlaceholder';

type Props = NativeStackScreenProps<RootStackParamList, 'MyCourses'>;

const EnrolledCourses = ({navigation}: Props) => {
  const {enrolledCourses} = useSelector(
    (state: RootState) => state.enrolledCourses,
  );

  if (enrolledCourses.length === 0)
    return <EmptyPlaceholder iconName="checklist" />;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={enrolledCourses}
      renderItem={({item: {course}}) => (
        <CourseLayout
          imageUrl={course.imageUrl}
          onItemPress={() => navigation.navigate('Details', {id: course.id})}
          courseName={course.courseName}
          instructorName={course.instructorName}
        />
      )}
      ListFooterComponent={<View style={{height: 100}} />}
    />
  );
};

export default EnrolledCourses;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    marginTop: 15,
  },
});
