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

const MyCourses = ({navigation}: Props) => {
  const {favoriteCourses} = useSelector(
    (state: RootState) => state.favoriteCourses,
  );

  if (favoriteCourses.length === 0)
    return <EmptyPlaceholder iconName="bookmark-outline" />;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={favoriteCourses}
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

export default MyCourses;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    marginTop: 15,
  },
});
