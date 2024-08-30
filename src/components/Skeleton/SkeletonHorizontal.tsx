import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MediumText from '../MediumText';
import RegularText from '../RegularText';
import CardLayout from '../CardLayout';
import {Course, GetCoursesData} from '../../types/interfaces';
import {useQuery} from '@apollo/client';
import {GET_COURSES_BY_TYPE} from '../../types/graphqlQueries';
import Skeleton from './Skeleton';
import {Colors} from '../../theme/MyColors';
import SkeletonCard from './SkeletonCard';

const SkeletonHorizontal = () => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Skeleton style={{height: 30, width: '70%'}} />
        <Skeleton style={{height: 30, width: 100}} />
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={[1, 2, 3, 5, 6]}
        renderItem={({item: course}) => <SkeletonCard />}
        horizontal
      />
    </View>
  );
};

export default SkeletonHorizontal;

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
