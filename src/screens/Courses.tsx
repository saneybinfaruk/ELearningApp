import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import CourseLayout from '../components/CourseLayout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/interfaces';
import useBottomBarVisibility from '../hook/useBottomBarVisibility';
import {useIsFocused} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_COURSES_BY_TYPE} from '../types/graphqlQueries';

type Props = NativeStackScreenProps<RootStackParamList, 'Courses'>;
const Courses = ({navigation, route}: Props) => {
  const courseType = route.params.courseType;
  const {data, loading} = useQuery(GET_COURSES_BY_TYPE, {
    variables: {courseType},
  });

  /**
   * Hide the bottom navigation bar after entering the component.
   *
   * This hook is used to manage the visibility of the bottom navigation bar.
   * It ensures that the bottom navigation bar is hidden when this component is mounted.
   */
  useBottomBarVisibility();

  useEffect(() => {
    navigation.setOptions({
      title: courseType,
    });
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data?.coursesByType}
      renderItem={({item}) => (
        <CourseLayout
          courseName={item.courseName}
          instructorName={`By ${item.instructorName}`}
          imageUrl={item.imageUrl}
          onItemPress={() => navigation.navigate('Details', {id: item.id})}
        />
      )}
      ListFooterComponent={<View style={{height: 100}} />}
    />
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    marginTop: 15,
  },
});
