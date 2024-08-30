import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Skeleton from './Skeleton';
import SkeletonHorizontal from './SkeletonHorizontal';

const SkeletonHome = () => {
  const datas = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Skeleton style={{height: 30, width: '40%'}} />
        <Skeleton style={{height: 30, width: '20%'}} />
      </View>
      <Skeleton style={{height: 80, width: '100%'}} />

      {datas.map(data => (
        <SkeletonHorizontal key={data} />
      ))}

      <View style={{height: 100}} />
    </View>
  );
};

export default SkeletonHome;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
});
