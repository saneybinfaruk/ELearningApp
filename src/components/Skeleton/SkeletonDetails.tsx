import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Skeleton from './Skeleton';

const SkeletonDetails = () => {
  return (
    <View>
      <Skeleton style={{height: 250, width: '100%',marginBottom: 1,borderRadius: 10}} />

      <View style={styles.container}>
        <Skeleton style={{height: 55, width: '100%'}} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Skeleton style={{height: 45, width: '40%'}} />
          <Skeleton style={{height: 60, width: '30%'}} />
        </View>

        <Skeleton style={{height: 85, width: '100%'}} />
        <Skeleton
          style={{
            height: 120,
            width: '98%',
            alignSelf: 'center',
            borderRadius: 20
          }}
        />
        <Skeleton style={{height: 35, width: '30%'}} />
        <Skeleton style={{height: 120, width: '100%'}} />
      </View>
    </View>
  );
};

export default SkeletonDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    gap: 5,
  },
});
